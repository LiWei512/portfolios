import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FEDBD0",
    },
    secondary: {
      main: "#FEEAE6",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#442C2E",
    },
  },
})

export default theme
