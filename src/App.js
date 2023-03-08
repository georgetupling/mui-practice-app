import React from "react";
import TravelCard from "./components/TravelCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import css from "./App.css";

function App() {
  return (
    <Container>
      <Grid container spacing={4}>
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
      </Grid>
    </Container>
  );
}

export default App;
