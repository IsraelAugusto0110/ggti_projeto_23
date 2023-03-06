import { AppBar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Typography>GGTI 2023</Typography>
      <Link to="/">Home</Link>
      <Link to="/destinos">Destinos</Link>
    </AppBar>
  );
};

export default Navbar;
