import React from "react";
import PropTypes from "prop-types";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { Header, Footer } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    backgroundColor: theme.palette.primary.main,
    flex: 'auto',
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
