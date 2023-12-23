

const stylePdf = (theme) => {
  return `
  html,body {background-color: ${
    theme === "dark" ? "#151619" : "#ffffff"
  }; font-family: 'Roboto Slab', serif; }`;
};

export default stylePdf;

// let styles;
//   if (theme === "dark"){
//     styles = await fetch("/(pdf)/pdf-styles-dark.css");
//   }
//   if (theme === "light"){
//     styles = await fetch("/(pdf)/pdf-styles.css");
//   }
//   console.log(styles)
//   // return styles