import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  bio: {
    "& a": {
      color: theme.palette.text.primary,
    },
  },
}));

export default function Bio() {
  const classes = useStyles();
  const query = graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/bio.md/" }) {
        id
        html
        frontmatter {
          title
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  return (
    <Container maxWidth="md">
      <Box paddingY={8}>
        <Box p={2}>
          <Typography variant="h4" align="center">
            {data.markdownRemark.frontmatter.title}
          </Typography>
        </Box>

        <Box p={2}>
          <Typography
            variant="h6"
            component="div"
            align="center"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            className={classes.bio}
          ></Typography>
        </Box>
      </Box>
    </Container>
  );
}
