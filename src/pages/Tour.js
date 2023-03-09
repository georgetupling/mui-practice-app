import React from "react";
import { useParams } from "react-router-dom";

const Tour = () => {
  const { id } = useParams();
  return <h1>Tour {id}</h1>;
};

export default Tour;
