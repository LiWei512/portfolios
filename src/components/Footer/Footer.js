import React from "react";
import { Box, Typography } from '@material-ui/core';
import { Emoji } from "components";
import gatsbyIcon from "../../static/gatsby.svg";

export default function Footer() {
  return (
    <footer>
      <Box p={6} bgcolor="secondary.main">
        <Typography variant="h6" align="center" gutterBottom>
          <Box
            component="span"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <span>Made with&nbsp;</span>
            <img
              style={{ width: 20, height: 20 }}
              src={gatsbyIcon}
              alt="gatsby"
            />
            <span>,&nbsp; </span>
            <Emoji symbol="❤" label="love" style={{ color: "red" }} />
            <span>, and&nbsp;</span>
            <Emoji symbol="☕" label="coffee" />
            {"."}
          </Box>
        </Typography>
      </Box>
    </footer>
  );
}
