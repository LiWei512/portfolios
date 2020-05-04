import React from "react";
import PropTypes from "prop-types";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Header, Footer } from "components";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    backgroundColor: theme.palette.primary.main,
    flex: "auto",
  },
  headerPadding: {
    paddingTop: "4rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "3.5rem",
    },
  },
}));

const Layout = ({ children, isHeader }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={clsx(classes.main, isHeader && classes.headerPadding)}>{children}</main >
      <Footer />
    </div >
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHeader: PropTypes.bool
};

Layout.defaultProps = {
  isHeader: true
};

export default Layout;
