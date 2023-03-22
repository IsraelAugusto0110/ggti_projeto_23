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

const locations = [
  {
    id: 1,
    nome: "Ilha de Creta - Grécia",
    img: require("../assets/images/crete01.jpg"),
    title: "Island of Crete - Greece",
    locDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut magna in nulla pretium volutpat eu eu turpis.",
  },
  {
    id: 2,
    nome: "Athenas - Grécia",
    img: require("../assets/images/athens01.jpg"),
    title: "Athens - Greece",
    locDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut magna in nulla pretium volutpat eu eu turpis.",
  },
  {
    id: 3,
    nome: "Florença - Italia",
    img: require("../assets/images/florence01.jpg"),
    title: "Florence - Italy",
    locDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut magna in nulla pretium volutpat eu eu turpis.",
  },
];

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
