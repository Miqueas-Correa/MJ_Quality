import { createTheme } from "@mui/material/styles";
// global stile
const theme = createTheme({
  palette: {
    primary: {
      main: "#888", // primary
    },
    secondary: {
      main: "#3f497f", // secondary
    },
    info: {
      main: "#00ff1e", // hover
    },
    background: {
      default: "#242424", // fondo
    },
    text: {
      primary: "#d0d0d0",    // color principal del texto
      secondary: "#aaaaaa",  // color secundario (subtítulos, hints)
      disabled: "#555555",   // texto deshabilitado
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;