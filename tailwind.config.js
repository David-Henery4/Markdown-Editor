/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smTablet: "37.5em", // 600px
    },
    colors: {
      veryDarkBlack: "#151619",
      darkBlack: "#1D1F22",
      lightBlack: "#2B2D31",
      lighterBlack: "#35393F",
      //
      darkGrey: "#7C8187",
      veryDarkGrey: "#5A6069",
      lightGrey: "#C1C4CB",
      lighterGrey: "#E4E4E4",
      //
      white: "#ffffff",
      whiteShade: "#F5F5F5",
      //
      orange: "#E46643",
      lightOrange: "#F39765",
    },
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "san-serif"],
        robotoSlab: ["var(--font-roboto-slab)", "san-serif"],
        robotoMono: ["var(--font-roboto-mono)", "san-serif"],
      },
      gridTemplateColumns: {
        nav: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
