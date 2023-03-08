import { Grid } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import imgBg from "../assets/images/img_bg02.jpg";

const Header = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        flexDirection="column"
        sx={{
          alignItems: "center",
          backgroundImage: `url(${imgBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "500px",
        }}
      ></Grid>
    </>
  );
};

export default Header;
