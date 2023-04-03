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
import { locations } from "./Modelos";
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
        {locations.map((location) => (
          <Card
            key={location.id}
            sx={{ maxWidth: 345, height: 500, marginTop: 2 }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image={location.img}
              title={location.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {location.nome}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                A partir de 10 X $199,90
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {location.locDesc}
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
        ))}
      </Grid>
    </>
  );
}

export default Destino;
