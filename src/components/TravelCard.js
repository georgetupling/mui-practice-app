import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTime from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import "./TravelCard.css";

const TravelCard = (props) => {
  const tour = props.tour;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={3}>
        <img src={tour.image}></img>
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {tour.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ width: "1rem" }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.duration} hours
            </Typography>
          </Box>

          <Box marginTop={3} sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="read-only"
              value={tour.rating}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography marginLeft={0.5} variant="body2" component="p">
              {tour.rating}
            </Typography>
            <Typography marginLeft={1.5} variant="body3" component="p">
              ({tour.numberOfReviews} Reviews)
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="p">
              £{tour.price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TravelCard;
