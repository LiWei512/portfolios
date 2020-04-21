import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import Avatar from "@material-ui/core/Avatar"
import Link from "@material-ui/core/Link"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import SocialGroup from "../SocialGroup"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  splashImageWrapper: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    position: "absolute !important",
    overflow: "hidden",
  },
  splashImage: {
    height: "100%",
  },
  splashContent: {
    position: "relative",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "4rem",
    // border: '1px solid white',
  },
  avatar: {
    width: 160,
    height: 160,
  },
}))

export default function AboutMe() {
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
  `

  const data = useStaticQuery(query)
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      <div className={classes.splashImageWrapper}>
        <Img
          className={classes.splashImage}
          fluid={data.background.childImageSharp.fluid}
          alt="Wei Li"
        />
      </div>
      <Container
        disableGutters
        maxWidth={"lg"}
        className={classes.splashContent}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Box pb={4}>
            <Avatar className={classes.avatar}>
              <Img
                // className={classes.splashImage}
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
            <Typography variant="h6" component="span" align="center">
              {data.site.siteMetadata.subtitle2}
            </Typography>
          </Box>

          <Box pb={1}>
            <Typography variant="h6" component="span" align="center">
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
        </Box>
      </Container>
    </Container>
  )
}
