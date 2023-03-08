import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTime from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import css from "./TravelCard.css";

const TravelCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={3}>
        <img src="images/waterfall.jpg"></img>
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse in the Falls
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ width: "1rem" }} />
            <Typography variant="body" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>

          <Box marginTop={3} sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="read-only"
              value={4.5}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography marginLeft={0.5} variant="body1" component="p">
              4.5
            </Typography>
            <Typography marginLeft={1.5} variant="body2" component="p">
              (655 Reviews)
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="p">
              From £147
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TravelCard;
