import React from "react";
import TravelCard from "./components/TravelCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ButtonAppBar from "./components/ButtonAppBar";
import { data } from "../data";
import "./App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    </ThemeProvider>
  );
}

export default App;
