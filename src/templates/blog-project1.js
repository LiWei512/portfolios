import React from "react";
import { makeStyles } from "@material-ui/styles";
import Img from "gatsby-image";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { graphql, navigate } from "gatsby";

import { IconButton, Container, Box, Paper, Grid, Typography } from '@material-ui/core';
import { Layout, SEO } from "components";


const useStyles = makeStyles(theme => ({
  caption: {
    fontWeight: 700,
  },
  tagSkill: {
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    color: "#222",
    fontSize: 12,
    display: "inline-block",
    cursor: "default",
    padding: "5px 5px",
    lineHeight: 1,
  },
  detailList: {
    paddingLeft: 16,
  },
  image: {
    marginTop: 12,
    marginBottom: 12,
  },
  link: {
    color: theme.palette.text.primary,
  },
}));

export default function ProjectModal(props) {
  const classes = useStyles();
  const project = props.data.projectsJson;
  const site = props.data.site;

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description}
        image={`${site.siteMetadata.baseUrl}${project.coverImage.publicURL}`}
      />
      <Container maxWidth="lg">
        <Box py={2}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              arial-label="back"
              onClick={() => navigate("/projects")}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6">{project.title}</Typography>
          </Box>
          <Box>
            <Grid container spacing={3}>
              {project.images.map((image, index) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                  <Paper className={classes.paper}>
                    <Img
                      key={index}
                      fluid={image.childImageSharp.fluid}
                      alt=""
                      className={classes.image}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Box my={2}>
              <Typography
                className={classes.caption}
                variant="caption"
                component="strong"
                display="block"
              >
                Skills
              </Typography>
              <Grid container spacing={1}>
                {project.skills.map((skill, index) => (
                  <Grid key={index} item>
                    <Paper className={classes.tagSkill}>{skill}</Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box my={2}>
              <Typography
                className={classes.caption}
                variant="caption"
                component="strong"
                display="block"
              >
                Project description
              </Typography>
              <Typography variant="body2" gutterBottom>
                {project.description}
              </Typography>
            </Box>

            <Box my={2}>
              <Typography
                className={classes.caption}
                variant="caption"
                component="strong"
                display="block"
              >
                Details
              </Typography>
              <ul className={classes.detailList}>
                {project.details.map((detail, index) => (
                  <li key={index}>
                    <Typography variant="body2" gutterBottom>
                      {detail}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>

            {project.url && (
              <Box my={2}>
                <Typography
                  className={classes.caption}
                  variant="caption"
                  component="strong"
                  display="block"
                >
                  URL
                </Typography>
                <Typography className={classes.link}>
                  {project.url}
                </Typography>
                {/* <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  {project.url}
                </a> */}
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        baseUrl
      }
    }
    projectsJson(fields: { slug: { eq: $slug } }) {
      id
      skills
      title
      url
      description
      details
      fields {
        slug
      }
      coverImage {
        publicURL
      }
      images {
        childImageSharp {
          fluid(maxWidth: 375) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
