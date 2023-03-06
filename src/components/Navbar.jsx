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
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", opacity: 0.25 }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <Typography>
                <Explore />
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Stack direction="row">
                <Button>
                  <Link to="/" style={linkStyle}>
                    HOME
                  </Link>
                </Button>
                <Button>
                  <Link to="/destinos" style={linkStyle}>
                    DESTINOS
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
