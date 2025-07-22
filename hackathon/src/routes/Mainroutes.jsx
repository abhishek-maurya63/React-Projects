import React from "react";
import { href, Route, Routes } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/details/:productId" element={<ProductDetails />} />
      <Route path="/faq" element={<FAQ />} />
      {/* Add more as needed */}
    </Routes>
  );
};

export default Mainroutes;
