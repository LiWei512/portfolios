import React from "react"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout";
import SEO from "../components/seo";
import SocialGroup from '../components/SocialGroup';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 12,
    minHeight: 'calc(100vh - 64px)',
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
}));

const IndexPage = ({ data }) => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3} style={{ minHeight: 'inherit' }}>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftPaper}>
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Borys Lee"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightPaper}>
              <Typography variant="h2" color="inherit" className={classes.description}>
                About me
              </Typography>
              <Typography variant="h6" color="inherit" className={classes.description}>
                {data.site.siteMetadata.description}
              </Typography>
              <SocialGroup />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "boryslee.jpg" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed(width: 480, height: 600) {
          ...GatsbyImageSharpFixed
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
