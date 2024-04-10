import { useParams } from "react-router-dom";

import React from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ImageCarousel } from "../components";
import { Grid } from "@mui/material";

export const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { brand, model, km, price, year, concession } = JSON.parse(
    localStorage.getItem("CARS_LIST") ?? "{}"
  ).find((v: any) => v.id === Number(id));

  const images = [
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-2.jpeg",
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-3.jpeg",
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-5.jpeg",
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-4.jpeg",
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-18.jpeg",
  ];

  return (
    <Grid container alignItems="center" style={{ height: "100vh" }}>
      <Grid
        xs={12}
        sm={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <ImageCarousel images={images} />
      </Grid>
      <Grid sm={12} xs={12} md={6}>
        <Typography
          sx={{ color: "#fff" }}
          variant="h5"
          textAlign="center"
          mb={2}
        >{`${brand.toUpperCase()} ${model.toUpperCase()}`}</Typography>
        <Grid
          container
          sx={{
            color: "#fff",
            display: "flex",
            justifyContent: "space-around",
          }}
          xs={12}
          sm={12}
        >
          <Box>
            <Typography>Marca</Typography>
            <Typography>Modelo</Typography>
            <Typography>Kilometraje</Typography>
            <Typography>Precio</Typography>
            <Typography>Año</Typography>
          </Box>
          <Box>
            <Typography>{brand}</Typography>
            <Typography>{model}</Typography>
            <Typography>{km}</Typography>
            <Typography>{price}</Typography>
            <Typography>{year.toString().split("-")[0]}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
