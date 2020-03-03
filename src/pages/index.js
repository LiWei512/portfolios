import React from "react"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout";
import SEO from "../components/seo";
import LifeTimeline from "../components/Sections/LifeTimeline";

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

const IndexPage = ({ data }) => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <Container disableGutters maxWidth={false} className={classes.root}>
        <div className={classes.splashImageWrapper}>
          <Img
            className={classes.splashImage}
            fluid={data.file.childImageSharp.fluid}
            alt="Borys Lee"
          />
        </div>
        <Container maxWidth={"lg"} className={classes.splashContent}>
          <Typography variant="h1" component="h1" align="center">
            Hello World
          </Typography>
        </Container>
      </Container>
      <LifeTimeline />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
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
