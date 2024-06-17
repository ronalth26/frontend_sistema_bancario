import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  CssBaseline,
} from "@mui/material";
import Navbar from "./components/Navbar/Navbar"; // Asegúrate de que la ruta sea correcta
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./App.css";
import { Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
