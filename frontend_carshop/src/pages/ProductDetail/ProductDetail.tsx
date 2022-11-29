import { Grid, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../../molecules/CarCard/CarCard";
import Navbar from "../../organisms/Navbar/Navbar";
import CarService from "../../service/CarService";
import { CarType } from "../../types/Car.model";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from "../../context/ShoppingCartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [car, setCar] = useState<CarType>({} as CarType);
  const [cars, setCars] = useState<CarType[]>([]);

  const context = useCart();

  useEffect(() => {
    if (id) {
      CarService.getCar(id).then((data) => {
        setCar(data);
      });
      CarService.getCars().then((data) => {
        setCars(data);
      });
    }
  }, []);

  return (
    <>
      <Navbar />

      <Grid
        container
        style={{ marginTop: "2%", paddingLeft: "10%", paddingRight: "10%" }}
      >
        <Grid item sm={1} xs={1} />
        <Grid item sm={6} xs={10}>
          <img src={car?.picture_url} style={{ width: "100%" }} />
        </Grid>
        <Grid
          item
          sm={3}
          xs={6}
          style={{ marginLeft: "8%", marginBottom: "5%", marginTop: "5%" }}
        >
          <Typography variant="h4">{car?.name}</Typography>
          <Typography variant="body2">{car?.description}</Typography>
          <Typography variant="h6">CHF: {car?.price}.-</Typography>
          <IconButton onClick={() => {context.addCar(car)}}>
          <AddShoppingCartIcon />
          </IconButton>
        </Grid>
        <Grid item sm={1} xs={1} />

        <Grid item xs={12} sm={12} md={12} spacing={3}>
          <Typography
            variant="h4"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            Featured cars
          </Typography>
          <hr />
        </Grid>
          {cars.map((_card, index) => {
            if (index < 4) {
              const tmpCard = cars[index + Math.floor(Math.random() * 19)];
              return (
                <Grid item xs={12} sm={6} md={3} style={{ marginTop: "2%", display: "flex", justifyContent: "center"}}>
                  <CarCard
                    id={tmpCard.id}
                    description={tmpCard.description}
                    name={tmpCard.name}
                    picture_url={tmpCard.picture_url}
                    price={tmpCard.price}
                  />
                </Grid>
              );
            }
          })}
      </Grid>
    </>
  );
}
