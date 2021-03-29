import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1F2839",
    },
    secondary: {
      main: "#B69D74",
    },
    terciary: {
      main: "#f5f5ef",
    },
  },
  fontFamily: {
    ppal: {
      main: "Roboto",
      etc: '"Helvetica Neue"',
    },
  },
});

export default theme;
