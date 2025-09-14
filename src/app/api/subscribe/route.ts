import { NextResponse } from "next/server";
import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || "";
const SHEET_NAME = "Sheet1";

// Configure Google Sheets API
const configureGoogleSheets = async () => {
  try {
    const credentials = {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    };

    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return google.sheets({ version: "v4", auth });
  } catch (error) {
    console.error("Error configuring Google Sheets:", error);
    return null;
  }
};

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("Subscription request received for:", email);

    if (SPREADSHEET_ID) {
      const sheets = await configureGoogleSheets();
      if (sheets) {
        await ensureSheetExists(sheets);

        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: `${SHEET_NAME}!A:B`,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [[email, new Date().toISOString()]],
          },
        });

        console.log("Email saved to Google Sheets successfully");
      }
    } else {
      console.warn("GOOGLE_SHEET_ID not configured.");
    }

    return NextResponse.json({
      message: "Thank you for subscribing to our newsletter!",
      email,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}

async function ensureSheetExists(sheets: any) {
  try {
    await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:A1`,
    });
  } catch (error: any) {
    if (
      error.code === 404 ||
      (typeof error.message === "string" &&
        error.message.includes("Unable to parse range"))
    ) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: SHEET_NAME,
                  gridProperties: { rowCount: 1000, columnCount: 2 },
                },
              },
            },
          ],
        },
      });

      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:B1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [["Email", "Subscription Date"]],
        },
      });
    } else {
      throw error;
    }
  }
}
