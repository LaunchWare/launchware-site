const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Roboto", "sans-serif", ...fontFamily.sans],
        kanit: ["Kanit", "Roboto", "Arial", "sans-serif", ...fontFamily.sans],
      },
      colors: {
        white: "#ffffff",
        "launch-orange": "#F06449",
        "launch-black": "#2D2327",
        "launch-black-90": "#41393C",
        "launch-black-80": "#554D50",
        "launch-black-70": "#696164",
        "launch-black-60": "#7D7779",
        "launch-black-50": "#918B8E",
        "launch-black-40": "#A5A0A3",
        "launch-black-30": "#B9B5B7",
        "launch-black-10": "#E2E0E1",
        "launch-neutral-10": "#FFFFFF",
        "launch-neutral-20": "#F9FAFB",
        "launch-neutral-30": "#F5F5F5",
        "launch-primary-10": "#FFF7F6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
