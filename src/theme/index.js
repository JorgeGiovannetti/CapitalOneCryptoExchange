import BlockdemyUI from "blockdemy-ui";
import Toast from "blockdemy-ui/toast";

const brand = {
  primary: "#0D74AF",
  secondary: "#F8CC01",
  info: "#33B1DD",
  default: "#213443",
  success: "#0EA218",
  warning: "#F8CC01",
  danger: "#D03027"
};

const softColors = {};
Object.keys(brand).forEach(color => (softColors[color] = `${brand[color]}33`));

const grey = {
  darker: "#121217",
  dark: "#151A1F",
  semiDark: "#474B4F",
  lightDark: "#6F737A",
  lightGrey: "#AAAEB3",
  veryLightGrey: "#ECEDEF",
  light: "#F2F2F2",
  lighter: "#FFFFFF"
};

const colors = {
  ...brand,
  ...grey,
  gradient: "linear-gradient(135deg, #30CEE7, #8265FC);"
};

const theme = {
  colors,
  softColors
};

const { toast } = new Toast(theme);

const { BlockdemyUIProvider, getTheme } = new BlockdemyUI(theme);

export { BlockdemyUIProvider, toast, getTheme };
