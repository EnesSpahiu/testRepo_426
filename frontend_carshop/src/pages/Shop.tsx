import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CarCard from "../molecules/CarCard/CarCard";
import Navbar from "../organisms/Navbar/Navbar";
import CarService from "../service/CarService";
import { CarType } from "../types/Car.model";

export default function Shop() {
  const [cars, setCars] = useState<CarType[]>([]);

  useEffect(() => {
    CarService.getCars().then((res) => {
      setCars(res);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Grid item sm={12}>
          <Typography
            variant="h4"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Our Cars
          </Typography>
          <hr />
        </Grid>

        {cars.map((card) => {
          return (
            <Grid
              item
              sm={6}
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CarCard
                id={card.id}
                description={card.description}
                name={card.name}
                picture_url={card.picture_url}
                price={card.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
