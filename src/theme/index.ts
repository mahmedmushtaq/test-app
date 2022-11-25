import { createTheme } from "@mui/material/styles";

let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    common: {
      lightBlack: "#5C5C5C",
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    allVariants: {
      fontFamily: "'Inter'",
    },
    h5: {
      fontSize: "1.875rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1.25rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "1rem",
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Theme {}
  // allow configuration using `createTheme`
  interface ThemeOptions {}
}

export default theme;
