const white = "#fff";
const black = "#161617";
const gray = "#f8f8f9";

const themeLight = {
  background: gray,
  body: black,
};

const themeDark = {
  background: black,
  body: white,
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
