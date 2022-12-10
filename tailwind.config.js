module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },

  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {},
  plugins: [require("flowbite/plugin")],
  theme: {},
};
