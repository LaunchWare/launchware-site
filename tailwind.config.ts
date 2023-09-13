const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
  purge: [],
  darkMode: false,
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "Roboto", "sans-serif", ...fontFamily.sans]
      },
      colors: {
        white: "#ffffff",
        "launch-orange": "#F06449",
        "launch-black-90": "#41393C",
        "launch-black-80": "#554D50",
        "launch-black-70": "#696164",
        "launch-black-60": "#7D7779",
        "launch-black-50": "#918B8E",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
