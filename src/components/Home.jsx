import { Grid, Typography } from "@mui/material";

import React from "react";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        padding: 2,
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <Grid
        item
        sx={{
          padding: 5,
          width: "60%",
        }}
      >
        <Typography variant="h2" fontWeight="bold" marginBottom="10px">
          STU Ltda
        </Typography>
        <Typography variant="h3" fontWeight="bold" marginBottom="5px">
          Sobre nos
        </Typography>
        <Typography variant="p" fontSize={20} textAlign="justify">
          Lorem ipsum dolor sit amet. Sed iste minima quo deserunt inventore aut
          deserunt dolores cum minima omnis sit praesentium totam nam rerum
          doloribus. Est molestiae debitis ut facilis eveniet et dignissimos
          adipisci est voluptatibus totam ut cupiditate iste! Et sint quia vel
          quam error est deleniti natus. Eos nostrum corporis sit vero ipsa ea
          omnis galisum id fugiat necessitatibus aut velit dolorem ut asperiores
          assumenda.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
