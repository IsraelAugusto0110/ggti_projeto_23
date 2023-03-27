import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

function DetalheDestino() {
  return (
    <>
      <Grid
        container
        sx={{
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
            maxHeighteight: 500,
            minHeight: 250,
            width: "30%",
            padding: 2,
          }}
        >
          <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={2} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
        <Grid
          container
          item
          sx={{
            maxHeighteight: 500,
            minHeight: 250,
            width: "30%",
            padding: 2,
          }}
        >
          <Grid item sx={{ textAlign: "justify", padding: 1 }}>
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
          <Grid item>
            <Typography variant="body1" fontSize={20} textAlign="justify">
              Escolha um pacote:
            </Typography>
            <Grid
              container
              item
              sx={{
                flexDirection: "row",
                padding: 2,
                justifyContent: "space-between",
              }}
            >
              <Typography
                marginRight={1}
                variant="body1"
                fontSize={20}
                textAlign="justify"
              >
                Pacote Standard: A partir de 10 X $ 199,90
              </Typography>
              <Button variant="contained" fontWeight="bold" color="success">
                Comprar
              </Button>
            </Grid>
            <Grid
              container
              item
              sx={{
                flexDirection: "row",
                padding: 2,
                justifyContent: "space-between",
              }}
            >
              <Typography
                marginRight={1}
                variant="body1"
                fontSize={20}
                textAlign="justify"
              >
                Pacote Vip: A partir de 10 X $ 399,90
              </Typography>
              <Button variant="contained" fontWeight="bold" color="success">
                Comprar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DetalheDestino;

const itemData = [
  {
    img: require("../assets/images/athens01.jpg"),
    title: "qualquer coisa",
  },
  {
    img: require("../assets/images/crete01.jpg"),
    title: "qualquer coisa",
  },
  {
    img: require("../assets/images/crete02.jpg"),
    title: "qualquer coisa",
  },
  {
    img: require("../assets/images/florence01.jpg"),
    title: "qualquer coisa",
  },
];
