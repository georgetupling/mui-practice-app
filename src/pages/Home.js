import React from "react";
import TravelCard from "../components/TravelCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { data } from "../../data";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Container sx={{ marginTop: "1rem" }}>
      {data.map((location, index) => {
        return (
          <Box key={index} marginTop="2rem">
            <Typography variant="h4" component="h2" marginBottom="0.5rem">
              {location.name}
            </Typography>
            <Grid container spacing={4}>
              {location.tours.map((tour, index) => {
                return <TravelCard key={index} tour={tour} />;
              })}
            </Grid>
          </Box>
        );
      })}
    </Container>
  );
};

export default Home;
