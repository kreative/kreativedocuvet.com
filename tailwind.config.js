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
      backgroundImage: {
        placeholder: "url('/images/placeholder.png')",
        surgeon:
          "url('https://res.cloudinary.com/dlazo25rt/image/upload/v1704217372/kreativedocuvet.com/Surgery_Photo_oehdcg.webp')",
        "about-page-mockup":
          "url('https://res.cloudinary.com/dlazo25rt/image/upload/v1704230419/kreativedocuvet.com/ezgif.com-png-to-webp-converter_rd41d1.webp')",
        "female-vet":
          "url('https://res.cloudinary.com/dlazo25rt/image/upload/v1704217348/kreativedocuvet.com/Vet_portrait_wmkn1y.webp')",
        "hero-gradient":
          "url('https://res.cloudinary.com/dlazo25rt/image/upload/v1703699893/kreativedocuvet.com/Hero_Gradient_xoyiqz.webp')",
        "cta-gradient":
          "url('https://res.cloudinary.com/dlazo25rt/image/upload/v1703710705/kreativedocuvet.com/Gradient_background_gbseps.webp')",
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
