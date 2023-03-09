import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ErrorPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h4">
          Oops!
        </Typography>
        <Typography variant="h5" component="h5">
          Sorry, an unexpected error has occured.
        </Typography>
      </Box>
    </Container>
  );
};

export default ErrorPage;
