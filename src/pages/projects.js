import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { graphql, Link, withPrefix } from "gatsby"
import Img from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import { navigate } from "@reach/router"
import Paper from "@material-ui/core/Paper"
import ButtonBase from "@material-ui/core/ButtonBase"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: "1rem 0",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}))

const ProjectsPage = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Projects" />
      <Container maxWidth="lg">
        <Box py={2}>
          {data.allProjectsJson.edges.map(({ node: li }) => (
            <Paper className={classes.paper} key={li.id}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                  <ButtonBase
                    className={classes.image}
                    onClick={() =>
                      navigate(withPrefix(`/projects/${li.fields.slug}`))
                    }
                  >
                    <Img
                      fluid={li.coverImage.childImageSharp.fluid}
                      alt="Wei Li"
                      className={classes.image}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={8} md={8} container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h5" gutterBottom>
                        {li.title}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        {li.description}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link
                        style={{ color: `black` }}
                        to={`/projects/${li.fields.slug}`}
                      >
                        Show More
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      </Container>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          skills
          title
          url
          details
          fields {
            slug
          }
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
`
