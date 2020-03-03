import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

import Header from "./header";
import Footer from './footer';

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <main style={{ background: theme.palette.primary.main }}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
