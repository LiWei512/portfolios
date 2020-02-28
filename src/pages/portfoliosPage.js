import React from "react"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Typography from '@material-ui/core/Typography';
import { Router, navigate } from "@reach/router";
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

import Layout from "../components/layout";
import SEO from "../components/seo";
import PortfolioModal from '../components/PortfolioModal';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
  },
  paper: {
    padding: theme.spacing(2),
    margin: '1rem 0',
  },
  image: {
    width: '100%',
    height: '100%'
  }
}));

const PortfoliosPage = ({ data }) => {
  const classes = useStyles();
  const handleClose = () => {
    navigate('/portfolios');
  };

  return (
    <>
      <Layout>
        <SEO title="Work" />
        <Container maxWidth="lg" className={classes.root}>
          {data.allPortfoliosJson.edges.map(({ node: li }) => (
            <Paper className={classes.paper} key={li.id}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <ButtonBase className={classes.image} onClick={() => navigate(`/portfolios/${li.id}`)}>
                    <Img
                      fluid={li.coverImage.childImageSharp.fluid}
                      alt="Borys Lee"
                      className={classes.image}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={6} md={8} container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h2" gutterBottom>
                        {li.title}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        {li.description}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link style={{ color: `black` }} to={`/portfolios/${li.id}`}>
                        Show More
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Container>
        <Router basepath="/portfolios">
          <PortfolioModal path='/:portfolioId' open={true} onClose={handleClose} />
        </Router>
      </Layout>
    </>
  )
}

export default PortfoliosPage;

export const query = graphql`
  query {
    allPortfoliosJson {
      edges {
        node {
          id
          skills
          title
          url
          details
          description
          coverImage {
            childImageSharp {
              fluid(maxWidth: 360, maxHeight: 320) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
