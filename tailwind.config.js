const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        md: "800px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)"],
      },
      colors: {
        "brand-forrest": "#076448",
        "brand-deepocean": "#086268",
        "brand-seafoam": "#13CA93",
        "neutrals-1": "#ffffff",
        "neutrals-2": "#FAFAFA",
        "neutrals-3": "#f6f6f6",
        "neutrals-4": "#f2f1f2",
        "neutrals-5": "#dddddd",
        "neutrals-6": "#c7c7c7",
        "neutrals-7": "#9a999a",
        "neutrals-8": "#6d6c6d",
        "neutrals-9": "#5b5a5b",
        "neutrals-10": "#413f40",
        "neutrals-11": "#3a3839",
        "neutrals-12": "#312f30",
        "neutrals-13": "#1f1d1e",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config
