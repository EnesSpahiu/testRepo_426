import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import "./AboutUs.css"

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <Grid
        container
        className="page"
      >
        <Grid item sm={12}>
          <Typography
            variant="h2"
            className="center"
          >
            About Us
          </Typography>
          <hr />
        </Grid>
        <Grid container className="article">
          <Grid item xs={12} sm={9}>
            <Typography variant="h4" className="txt">The Programmers</Typography>
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
              takimata sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className="img"
          >
            <img
              src="https://cdn.dubootcamp.com/wp-content/uploads/sites/66/2020/05/shutterstock_753780223-850x412.jpg"
              alt=""
              style={{width: "100%"}}
            />
          </Grid>
        </Grid>
        <Grid container className="article">
          <Grid item xs={12} sm={9}>
            <Typography
              variant="h4"
              className="txt"
            >
              Our Idea
            </Typography>
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
              takimata sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className="img"
          >
            <img
              src="https://www.boston.com/wp-content/uploads/2020/01/2020-chevy-corvette-stingray-feature.jpg?width=900"
              alt=""
              style={{width: "100%"}}
            />
          </Grid>
        </Grid>
        <Grid container className="article">
          <Grid item xs={12} sm={9}>
            <Typography variant="h4" className="txt">Our Target</Typography>
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
              takimata sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className="img"
          >
            <img
              src="https://dentalbilling.com/wp-content/uploads/2019/10/Quality-over-Quantity-1024x427.jpg"
              alt=""
              style={{width: "100%"}}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
