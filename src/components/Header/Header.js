import React from "react";
import { Link as GatsbyLink, navigate, useStaticQuery, graphql, withPrefix } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {
  AppBar, Toolbar, Typography, Fab, useScrollTrigger
} from "@material-ui/core";
import Img from "gatsby-image";
import { useLocation } from "@reach/router";
import { HideOnScroll, ScrollTop } from "components";

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
    marginLeft: "auto",
    paddingLeft: 0,
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
}));

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
];

const query = graphql`
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
`;

const Header = props => {
  const classes = useStyles();
  const location = useLocation();
  const data = useStaticQuery(query);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const isHome = location.pathname === withPrefix("/");

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          className={(trigger || !isHome) ? classes.appBar : classes.transparentAppBar}
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
      {/* back-to-top-anchor */}
      <div id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Header;
