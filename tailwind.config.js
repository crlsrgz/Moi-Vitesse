/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yeseva: ["Yeseva", "serif"],
        urbanistMedium: ["Urbanist-Medium", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
