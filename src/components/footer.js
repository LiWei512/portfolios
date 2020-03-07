import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Emoji from "./Emoji"

export default function Footer() {
  return (
    <footer>
      <Box p={6} bgcolor="secondary.main">
        <Typography variant="h6" align="center" gutterBottom>
          Made with <Emoji symbol="❤" label="love" style={{ color: "red" }} /> and{" "}
          <Emoji symbol="☕" label="coffee" />.
        </Typography>
      </Box>
    </footer>
  )
}
