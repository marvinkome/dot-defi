import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    "50": "#F0F9EC",
    "100": "#D6EEC9",
    "200": "#BCE3A6",
    "300": "#A1D883",
    "400": "#87CD60",
    "500": "#6DC13E",
    "600": "#579B31",
    "700": "#417425",
    "800": "#2C4D19",
    "900": "#16270C",
  },
};

const fonts = {
  body: "'Noto Sans', sans-serif",
  heading: "'Noto Sans', sans-serif",
};

const styles = {
  global: () => ({
    "html, body": {
      letterSpacing: "-0.5px",
    },
  }),
};

const components = {
  Heading: {
    baseStyle: {
      letterSpacing: "-1.2px",
    },
  },
};

const theme = extendTheme({ colors, fonts, styles, components });
export default theme;
