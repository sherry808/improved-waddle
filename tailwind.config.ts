import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "desktop-xl": "1440px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        monthis: ["Monthis", "sans-serif"],
        nats: ["Nats", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

export default config;
