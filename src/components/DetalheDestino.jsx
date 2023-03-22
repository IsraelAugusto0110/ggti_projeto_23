import { Grid, Typography } from "@mui/material";
import React from "react";

function DetalheDestino() {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "red",
          padding: 2,
          marginTop: 2,
          justifyContent: "center",
        }}
        flexDirection="row"
      >
        <Grid
          container
          item
          sx={{
            backgroundColor: "royalblue",
            maxHeighteight: 500,
            minHeight: 250,
            width: "30%",
            padding: 2,
          }}
        ></Grid>
        <Grid
          container
          item
          sx={{
            backgroundColor: "purple",
            maxHeighteight: 500,
            minHeight: 250,
            width: "30%",
            padding: 2,
          }}
        >
          <Grid
            item
            sx={{ backgroundColor: "white", textAlign: "justify", padding: 1 }}
          >
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Atenas - Grécia
            </Typography>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Sobre
            </Typography>
            <Typography variant="p" fontSize={20} textAlign="justify">
              Lorem ipsum dolor sit amet. Sed iste minima quo deserunt inventore
              aut deserunt dolores cum minima omnis sit praesentium totam nam
              rerum doloribus. Est molestiae debitis ut facilis eveniet et
              dignissimos adipisci est voluptatibus totam ut cupiditate iste! Et
              sint quia vel quam error est deleniti natus. Eos nostrum corporis
              sit vero ipsa ea omnis galisum id fugiat necessitatibus aut velit
              dolorem ut asperiores assumenda.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DetalheDestino;
