import React from "react";
import TravelCard from "./components/TravelCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ButtonAppBar from "./components/ButtonAppBar";
import css from "./App.css";

const theme = createTheme({
  typography: {
    body2: {
      fontSize: 11,
    },
    body3: {
      fontSize: 9,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Container sx={{ marginTop: "2rem" }}>
        <Grid container spacing={4}>
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
