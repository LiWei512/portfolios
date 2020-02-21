import React from "react";
import { Link as GatsbyLink, navigate, useStaticQuery, graphql } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Img from "gatsby-image";

import HideOnScroll from './HideOnScroll';
import ScrollTop from './ScrollTop';

const useStyles = makeStyles(theme => ({
  title: {
    '&:hover': {
      cursor: 'pointer',
    }
  },
  icon: {
    margin: '0 0.5rem',
  },
  toolbar: {
    margin: '0 auto',
    maxWidth: 1280,
    width: '100%'
  },
  navbar: {
    listStyle: 'none',
    textAlign: 'right',
    marginLeft: 'auto',
    '& li': {
      display: 'inline',
      padding: '0 0.5rem',
    }
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  active: {
    textDecoration: 'underline'
  }
}));

const navLinks = [
  {
    to: '/',
    title: 'About',
  },
  {
    to: '/portfolios',
    title: 'Portfolios',
  },
  {
    to: '/blog',
    title: 'Blog',
  },
  {
    to: '/contact',
    title: 'Contact',
  },
];

const Header = (props) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "gatsby-icon.png" }) {
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

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Img
              className={classes.icon}
              fixed={data.file.childImageSharp.fixed}
              alt="Borys Lee"
            />
            <Typography variant="h6" color="inherit" noWrap className={classes.title} onClick={() => navigate('/')}>
              {data.site.siteMetadata.title}
            </Typography>
            <ul className={classes.navbar}>
              {navLinks.map((list) =>
                <li key={list.title}>
                  <GatsbyLink to={list.to} className={classes.link} activeClassName={classes.active}>{list.title}</GatsbyLink>
                </li>
              )}
            </ul>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* back-to-top-anchor */}
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default Header
