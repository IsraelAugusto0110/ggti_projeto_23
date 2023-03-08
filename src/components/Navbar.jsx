import { Explore } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "black", opacity: 0.45 }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <Typography color="white">
                <Explore fontSize="large" />
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Stack direction="row">
                <Button>
                  <Link to="/" style={linkStyle}>
                    <Typography color="white">HOME</Typography>
                  </Link>
                </Button>
                <Button>
                  <Link to="/destinos" style={linkStyle}>
                    <Typography color="white">DESTINOS</Typography>
                  </Link>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
