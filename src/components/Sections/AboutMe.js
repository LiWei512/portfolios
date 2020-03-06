import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  leftPaper: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  rightPaper: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '1rem',
  },
  splashImageWrapper: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    position: 'absolute !important',
    overflow: 'hidden',
  },
  splashImage: {
    height: '100%'
  },
  splashContent: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default function AboutMe() {
  const query = graphql`
    query {
      file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          description
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      <div className={classes.splashImageWrapper}>
        <Img
          className={classes.splashImage}
          fluid={data.file.childImageSharp.fluid}
          alt="Borys Lee"
        />
      </div>
      <Container maxWidth={"lg"} className={classes.splashContent}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h2" component="h1" align="center">
            <b>Learn to Create, Learn to Innovate</b>
          </Typography>
          <Typography variant="h6" component="span" align="center">
            <b>Learn more about what I do</b>
          </Typography>
        </Box>
      </Container>
    </Container>
  )
}
