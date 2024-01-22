/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      cornflowerBlue: "#475EDF",
      cornflowerBlueText: "#5D71DF",
      royalPurple: "#5C47DF",
      royalPurpleText: "#7464DD",
      skyBlue: "#4784DF",
      skyBlueText: "#6BA2E1",

      crimsonRed: "#D62839",
      lightRed: "#FFD8D9",
      black75: "rgba(0, 0, 0, 0.75)",
      black50: "rgba(0, 0, 0, 0.50)",
      black25: "rgba(0, 0, 0, 0.25)",
      white90: "rgba(255,255,255,0.90)",
      white85: "rgba(255,255,255,0.85)",
      white75: "rgba(255,255,255,0.75)",
      white50: "rgba(255,255,255,0.50)",
      white25: "rgba(255,255,255,0.25)",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
