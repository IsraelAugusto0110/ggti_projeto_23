import { Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import image from "../assets/images/creta.jpg";

const Header = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        flexDirection="column"
        sx={{
          alignItems: "center",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "600px",
        }}
      >
        <Grid item sx={{ backgroundColor: "yellow", padding: 2 }} xs={6}>
          <Typography color="white" fontWeight="bold" variant="h4">
            Discover new places
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
