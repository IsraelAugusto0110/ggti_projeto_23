import { Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import imgBg from "../assets/images/img_bg02.jpg";

const Header = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        flexDirection="column-reverse"
        sx={{
          alignItems: "center",
          backgroundImage: `url(${imgBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <Grid item sx={{ padding: 2 }}>
          <Typography variant="h4" color="white">
            Descubra novos lugares
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
