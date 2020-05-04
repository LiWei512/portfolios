import React from "react";
import { makeStyles } from "@material-ui/styles";
import Img from "gatsby-image";
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby";
import { useTheme } from "@material-ui/core/styles";

import { Typography, Container, Box, Button, Avatar, Link, useMediaQuery } from '@material-ui/core';
import { SocialGroup } from "components";


const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  backgroundImageWrapper: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  backgroundImage: {
    height: "100%",
  },
  content: {
    padding: '4rem 0',
    position: "relative",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 160,
    height: 160,
  },
});

const query = graphql`
  query {
    background: file(relativePath: { eq: "landscape.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    avatar: file(relativePath: { eq: "labtocat.png" }) {
      childImageSharp {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        tagline
        subtitle1
        subtitle2
        email
      }
    }
  }
`;

export default function AboutMe() {
  const data = useStaticQuery(query);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      <div className={classes.backgroundImageWrapper}>
        <Img
          className={classes.backgroundImage}
          fluid={data.background.childImageSharp.fluid}
          alt="Wei Li"
        />
      </div>
      <Container
        disableGutters
        maxWidth={"lg"}
        className={classes.content}
      >
        <Box pb={4}>
          <Avatar className={classes.avatar}>
            <Img
              fixed={data.avatar.childImageSharp.fixed}
              alt="Wei Li"
            />
          </Avatar>
        </Box>

        <Box pb={2}>
          <Typography
            variant={matches ? "h2" : "h5"}
            component="h1"
            align="center"
          >
            <b>{data.site.siteMetadata.tagline}</b>
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography variant="h6" component="h6" align="center">
            <b>{data.site.siteMetadata.subtitle1}</b>
          </Typography>
        </Box>

        <Box pb={2}>
          <Typography variant="h6" component="p" align="center">
            {data.site.siteMetadata.subtitle2}
          </Typography>
        </Box>

        <Box pb={1}>
          <Typography variant="h6" component="p" align="center">
            Contact me at{" "}
            <Link href="mailto:developer.clear@gmail.com" color="textPrimary">
              <strong>{data.site.siteMetadata.email}</strong>
            </Link>
          </Typography>
        </Box>

        <SocialGroup />

        <Box pt={2} pb={2}>
          <GatsbyLink to="/projects" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" size="large">
              Projects I have worked
              </Button>
          </GatsbyLink>
        </Box>
      </Container>
    </Container>
  );
}
