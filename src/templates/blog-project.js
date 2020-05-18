import React from "react";
import { makeStyles } from "@material-ui/styles";
import Img from "gatsby-image";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { graphql, navigate } from "gatsby";

import { IconButton, Container, Box, Grid, Typography } from "@material-ui/core";
import { Layout, SEO, SkillTag } from "components";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  detailList: {
    paddingLeft: 16,
    margin: 0,
  },
  image: {
    marginTop: 12,
    marginBottom: 12
  },
  link: {
    color: theme.palette.text.primary,
  },
}));

export default function RulerApp(props) {
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
      <Container maxWidth="lg" className={classes.container}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            arial-label="back"
            onClick={() => navigate("/projects")}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">{project.title}</Typography>
        </Box>

        <Box my={2} component="section">
          {project.images.map((image, index) => (
            <Img
              key={index}
              fluid={image.childImageSharp.fluid}
              alt={project.title}
              className={classes.image}
            />
          ))}
        </Box>

        <Box my={2} component="section">
          <Typography
            variant="subtitle2"
            component="strong"
            display="block"
          >
            Skills
          </Typography>
          <Grid container spacing={1}>
            {project.skills.map((skill, index) => (
              <Grid key={index} item>
                <SkillTag skill={skill} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box my={2} component="section">
          <Typography
            variant="subtitle2"
            component="strong"
            display="block"
          >
            Project description
          </Typography>
          <Typography variant="body2" gutterBottom>
            {project.description}
          </Typography>
        </Box>

        <Box my={2} component="section">
          <Typography
            variant="subtitle2"
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
          <Box my={2} component="section">
            <Typography
              variant="subtitle2"
              component="strong"
              display="block"
            >
              URL
            </Typography>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {project.url}
            </a>
          </Box>
        )}
      </Container>
    </Layout >
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
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
