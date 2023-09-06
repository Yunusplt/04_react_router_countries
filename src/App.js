import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element=<Home/>/>
        <Route path="/about" element=<About/>/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
