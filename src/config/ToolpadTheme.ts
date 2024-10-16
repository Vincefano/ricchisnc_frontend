import { createTheme } from "@mui/material";
import { COLORS } from "../constants/colors";

const { primary, secondary, error, warning, info, success, text } = COLORS;

export const toolpadTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: primary,
        },
        secondary: {
          main: primary,
        },
        background: {
          default: secondary,
        },
        text: {
          primary: text,
          secondary: primary,
        },
        error: {
          main: error,
        },
        warning: {
          main: warning,
        },
        info: {
          main: info,
        },
        success: {
          main: success,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
