import { Grid, Typography } from "@mui/material";
import { useCart } from "../context/ShoppingCartContext";
import Navbar from "../organisms/Navbar/Navbar";
import React from "react";

export default function ShoppingCartPage(){
  const context = useCart();

  return (
    <>
      <Navbar />

      {context.cars.map((car) => {
        return (
          <>
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
              <Typography variant="h6">CHF {car?.price}.-</Typography>
            </Grid>
            <Grid item sm={1} xs={1} />
          </Grid>
          <hr />
          </>
        );
      })}
    </>
  );
}
