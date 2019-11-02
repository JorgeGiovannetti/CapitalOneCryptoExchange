import React from "react";
import PropTypes from "prop-types";
import Box from "blockdemy-ui/box";
import Navbar from "./components/navbar";

const Layout = ({ children }) => (
  <Box p={40}>
    <Navbar />
    <div>{children}</div>
  </Box>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;
