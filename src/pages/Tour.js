import React from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";

const Tour = () => {
  const { id } = useParams();

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h4" component="h2" marginTop="2rem">
        See the World in Las Vegas!
      </Typography>
      <Box marginTop="1rem" display="flex">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/72/b5/b9/caption.jpg?w=500&h=400&s=1"
          style={{ width: "500px", height: "300px" }}
        ></img>
        <ImageCollage />
      </Box>
      <Box marginTop="2rem">
        <Typography variant="h5" component="h3">
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Typography>
      </Box>
    </Container>
  );
};

export default Tour;
