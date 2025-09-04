This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 📊 Google Sheets Setup for Email Subscriptions

This project stores subscriber emails directly in **Google Sheets** using the Google Sheets API. Follow these steps to set it up:

### 1. Create a Google Sheet
- Go to [Google Sheets](https://sheets.google.com/) and create a new spreadsheet.   
- Copy the **Spreadsheet ID** from the URL. It’s the long string between `/d/` and `/edit`:  

https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit


### 2. Create a Google Cloud Project
- Visit [Google Cloud Console](https://console.cloud.google.com/).  
- Create a new project (or use an existing one).  
- Go to **APIs & Services → Library** and enable **Google Sheets API**.

### 3. Create a Service Account
- In the same project, go to **APIs & Services → Credentials**.  
- Click **Create Credentials → Service Account**.  
- Once created, go to the **Keys** tab, click **Add Key → Create New Key → JSON**.  
- This downloads a `.json` file with your credentials. Keep it safe.

### 4. Share the Sheet with Your Service Account
- Open your Google Sheet.  
- Click **Share**.  
- Paste the **service account email** (found in your JSON file, looks like `something@project-id.iam.gserviceaccount.com`).  
- Give it **Editor** permissions.

### 5. Add Environment Variables
- Open your `.env.local` file.  
- Add values from your service account JSON (project ID, private key, client email, etc.) and your **Spreadsheet ID**.  
- Example:
```bash
GOOGLE_CLIENT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nABC123...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_spreadsheet_id_here

