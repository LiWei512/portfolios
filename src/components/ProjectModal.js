import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
}))

export default function ProjectModal(props) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()

  const { open, onClose, projectId } = props
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            id
            skills
            title
            url
            details
            description
            images {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  let edge = data.allProjectsJson.edges.find(edge => edge.node.id === projectId)

  let project = edge.node
  console.log(project)
  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{project.title}</DialogTitle>
      <DialogContent>
        {project.images.map((image, index) => (
          <Img
            key={index}
            fluid={image.childImageSharp.fluid}
            alt=""
            className={classes.image}
          />
        ))}

        <Box my={2}>
          <Typography
            className={classes.caption}
            variant="caption"
            component="strong"
            display="block"
          >
            Skills
          </Typography>
          <Grid container spacing={2}>
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

        <Box my={2}>
          <Typography
            className={classes.caption}
            variant="caption"
            component="strong"
            display="block"
          >
            URL
          </Typography>
          <Typography variant="body2" gutterBottom>
            {project.url}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

ProjectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
