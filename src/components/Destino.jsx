import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

function Destino() {
  return (
    <>
      <Grid
        container
        flexDirection="row"
        sx={{
          padding: 1,
          justifyContent: "space-evenly",
        }}
      >
        <Card sx={{ maxWidth: 345, height: 500, marginTop: 2 }}>
          <CardMedia
            sx={{ height: 250 }}
            image={require("../assets/images/crete01.jpg")}
            title="Island of Crete - Greece"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ilha de Creta - Grécia
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              A partir de 10 X $199,90
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              magna in nulla pretium volutpat eu eu turpis.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" variant="text">
              <Link to="/detalhe" style={linkStyle}>
                <Typography variant="body2" fontWeight="bold" color="skyblue">
                  Saiba mais
                </Typography>
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default Destino;
