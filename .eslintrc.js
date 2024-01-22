module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off"
  },
};
