const defaultTheme = require("tailwindcss/defaultTheme");

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
        sm2: "750px",
        md: "800px",
        md2: "900px",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)"],
      },
      backgroundImage: {
        "hero": "url('https://res.cloudinary.com/dlazo25rt/image/upload/v1703699893/kreativedocuvet.com/Hero_Gradient_xoyiqz.webp')",
      },
      colors: {
        "brand-forrest": "#076448",
        "brand-deepocean": "#086268",
        "brand-seafoam": "#13CA93",
        "brand-medicalblue": "#17CAD6",
        "seafoam-50": "#E8FAF4",
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

export default config;
