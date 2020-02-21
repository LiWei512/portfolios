import React from "react"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout";
import SEO from "../components/seo";
// import SocialGroup from '../components/SocialGroup';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
  },
  paper: {
    padding: theme.spacing(2),
    margin: '1rem 0',
  },
  image: {
    width: '100%'
  }
}));

const portfolios = [
  {
    id: 0,
    title: 'Turncoin',
    coverImage: '',
    images: [],
    skills: [],
    description: `
      Working closely with software development and testing team members to design and develop robust solutions to meet client(https://www.linkedin.com/company/turncoinio/) requirements for functionality, scalability, and performance for the xchange project(turncoin.io marketing site-https://turncoin.io, xsport app, xsport backend).
      Writing test cases for new enhancements and issues for the xsport backend.
      Implementing news feed system for the xsport app.
      Implemented the turncoin.io marketing user pages and admin pages using React-Redux-Saga and Antd design.
      Implemented the turncoin.io marketing site backend.
    `,
    details: [],
    url: '',
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 1,
    title: 'Turncoin',
    coverImage: '',
    images: [],
    skills: [],
    description: `
      Working closely with software development and testing team members to design and develop robust solutions to meet client(https://www.linkedin.com/company/turncoinio/) requirements for functionality, scalability, and performance for the xchange project(turncoin.io marketing site-https://turncoin.io, xsport app, xsport backend).
      Writing test cases for new enhancements and issues for the xsport backend.
      Implementing news feed system for the xsport app.
      Implemented the turncoin.io marketing user pages and admin pages using React-Redux-Saga and Antd design.
      Implemented the turncoin.io marketing site backend.
    `,
    details: [],
    url: '',
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 2,
    title: 'Turncoin',
    coverImage: '',
    images: [],
    skills: [],
    description: `
      Working closely with software development and testing team members to design and develop robust solutions to meet client(https://www.linkedin.com/company/turncoinio/) requirements for functionality, scalability, and performance for the xchange project(turncoin.io marketing site-https://turncoin.io, xsport app, xsport backend).
      Writing test cases for new enhancements and issues for the xsport backend.
      Implementing news feed system for the xsport app.
      Implemented the turncoin.io marketing user pages and admin pages using React-Redux-Saga and Antd design.
      Implemented the turncoin.io marketing site backend.
    `,
    details: [],
    url: '',
    startDate: new Date(),
    endDate: new Date(),
  },
];

const PortfoliosPage = ({ data }) => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Work" />
      <Container maxWidth="lg" className={classes.root}>
        {portfolios.map(li => (
          <Paper className={classes.paper} key={li.id}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <ButtonBase className={classes.image}>
                  <Img
                    fixed={data.file.childImageSharp.fixed}
                    alt="Borys Lee"
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
                    <Button size="medium" color="primary">
                      Show More
                </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Container>
    </Layout>
  )
}

export default PortfoliosPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "crazy.jpg" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed(width: 360, height: 360) {
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