import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#714b67",
    },
    secondary: {
      main: "#695d88",
    },
    background: {
      default: "#e8e8e8",
    },
    text: {
      primary: "#714b67",
      secondary: "#e8e8e8",
    },
    error: {
      main: "#d47773",
    },
    warning: {
      main: "#ffc665",
    },
    info: {
      main: "#4d73a1",
    },
    success: {
      main: "#39aa90",
    },
  },
});

export default theme;
