import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CarType } from "../../types/Car.model";
import "./CarCard.css";

export default function CarCard(props: CarType) {
  return (
    <Card className="card" >
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={props.picture_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography> <br />
        <Typography variant="body2" color="text.secondary">
          CHF {props.price}.-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={"/shop/" + props.id} style={{bottom: "10px"}}>
          More
        </Button>
      </CardActions>
    </Card>
  );
}
