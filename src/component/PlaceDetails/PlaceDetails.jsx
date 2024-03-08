import React from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  CardContent,
  CardActions,
  Chip,
  CardMedia,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frestaurants&psig=AOvVaw0OPqCVnYZXKlFix4RJCdhm&ust=1709963996485000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJj15Lf-44QDFQAAAAAdAAAAABAE"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default PlaceDetails;
