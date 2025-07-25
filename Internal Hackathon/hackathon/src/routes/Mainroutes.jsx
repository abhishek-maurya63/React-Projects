import React from "react";
import { href, Route, Routes } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";
import Home from "../components/Home";
import Signup from "../components/Signup";
import About from "../components/About";


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/details/:productId" element={<ProductDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
