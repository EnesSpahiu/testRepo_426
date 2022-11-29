import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CarCard from "../molecules/CarCard/CarCard";
import Slider from "../molecules/Slider/Slider";
import Navbar from "../organisms/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import { Grid, Typography } from "@mui/material";
import CarService from "../service/CarService";
import { CarType } from "../types/Car.model";

export default function Home() {
  const [cars, setCars] = useState<CarType[]>();

  useEffect(() => {
    CarService.getCars().then((data) => {
      setCars(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <br />

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
        <Slider />
        <Grid item sm={12}>
          <Typography
            variant="h4"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            Most Popular
          </Typography>
          <hr />
        </Grid>
        {cars && cars.map((_card, index) => {
          if (index < 4) {
            const tmpCard = cars[index + 3];
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                style={{
                  marginTop: "2%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
        <Grid
          container
          style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
        >
          <Grid item sm={12}>
            <Typography
              variant="h4"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              About our cars
            </Typography>
            <hr />
          </Grid>
          <Grid item sm={9} style={{ marginTop: "2%" }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel
              eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore te feugait nulla
              facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit
              augue duis dolore te feugait nulla facilisi. Nam liber tempor cum
              soluta nobis eleifend option congue nihil imperdiet doming id quod
              mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
              autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat, vel illum dolore eu feugiat nulla facilisis.
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, At accusam aliquyam diam
              diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et
              et invidunt justo labore Stet clita ea et gubergren, kasd magna no
              rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
