/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lgMobile: "32em", // 512px
      smTablet: "37.5em", // 600px
      tablet: "47.5em", // 760px
      lgTablet: "54.25em", // 868px
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
      //
      darkBlue: "#191D24",
      //
      red: "#D73737",
    },
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "san-serif"],
        robotoSlab: ["var(--font-roboto-slab)", "san-serif"],
        robotoMono: ["var(--font-roboto-mono)", "san-serif"],
      },
      gridTemplateColumns: {
        nav: "auto 1fr auto",
        markdownPreviewContainer: "50% 50%",
        signIn: "24px repeat(10,1fr) 24px",
      },
      gridTemplateRows: {
        mainInitialRows: "auto 1fr",
        markdownContainerRows: "auto 1fr",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
