import React from "react"
import { Link as GatsbyLink, navigate, useStaticQuery, graphql } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Img from "gatsby-image"

import HideOnScroll from "./HideOnScroll"
import ScrollTop from "./ScrollTop"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

const useStyles = makeStyles(theme => ({
  title: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  icon: {
    margin: "0 0.5rem",
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  transparentAppBar: {
    backgroundColor: "transparent",
  },
  toolbar: {
    margin: "0 auto",
    maxWidth: 1280,
    width: "100%",
    // background: 'white',
  },
  navbar: {
    listStyle: "none",
    textAlign: "right",
    marginLeft: "auto",
    "& li": {
      display: "inline",
      padding: "0 0.5rem",
    },
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  active: {
    textDecoration: "underline",
  },
}))

const navLinks = [
  {
    to: "/",
    title: "About",
  },
  {
    to: "/projects",
    title: "Projects",
  },
  // {
  //   to: '/blog',
  //   title: 'Blog',
  // },
  // {
  //   to: '/contact',
  //   title: 'Contact',
  // },
]

const Header = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "book.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 })

  return (
    <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          className={trigger ? classes.appBar : classes.transparentAppBar}
          elevation={0}
        >
          <Toolbar className={classes.toolbar}>
            <Img
              className={classes.icon}
              fixed={data.file.childImageSharp.fixed}
              alt="Wei Li"
            />
            <Typography
              variant="h6"
              color="textPrimary"
              noWrap
              className={classes.title}
              onClick={() => navigate("/")}
            >
              {data.site.siteMetadata.title}
            </Typography>
            <ul className={classes.navbar}>
              {navLinks.map(list => (
                <li key={list.title}>
                  <GatsbyLink
                    to={list.to}
                    className={classes.link}
                    activeClassName={classes.active}
                  >
                    {list.title}
                  </GatsbyLink>
                </li>
              ))}
            </ul>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* back-to-top-anchor */}
      <div id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}

export default Header
