import React from "react";
import { Link as GatsbyLink, navigate } from 'gatsby';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import HideOnScroll from './HideOnScroll';
import ScrollTop from './ScrollTop';

const useStyles = makeStyles(theme => ({
  title: {
    '&:hover': {
      cursor: 'pointer',
    }
  },
  toolbar: {
    margin: '0 auto',
    maxWidth: 1200,
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
    to: '/work',
    title: 'Work',
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
  const { siteTitle } = props;
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.title} onClick={() => navigate('/')}>
              {siteTitle}
            </Typography>
            <ul className={classes.navbar}>
              {navLinks.map((list) =>
                <li>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
