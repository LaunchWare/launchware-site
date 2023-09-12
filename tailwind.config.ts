export default {
  purge: [],
  darkMode: false,
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        white: "#ffffff",
      },
      textColor: {
        primary: "#2ccbc0",
        secondary: "#6930c3",
      },
      borderColor: {
        primary: "#2ccbc0",
        secondary: "#6930c3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
