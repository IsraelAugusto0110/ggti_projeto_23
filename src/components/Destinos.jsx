import { Grid, Typography } from "@mui/material";
import React from "react";
import Destino from "./Destino";

const Destinos = () => {
  return (
    <>
      <Grid padding={5}>
        <Typography variant="h4" textAlign="center">
          Escolha sua proxima viagem.
        </Typography>
        <Destino />
      </Grid>
    </>
  );
};

export default Destinos;
