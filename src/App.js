import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import ErrorPage from "./pages/ErrorPage";
import ButtonAppBar from "./components/ButtonAppBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "tour/:id",
    element: <Tour />,
  },
]);

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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
