import React, { createContext, useContext, useEffect } from "react";
import { recipecontext } from "../Context/Recipecontext";
import axios from "../utils/axios";

const Home = () => {
  const getProduct = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Mounted");
    getProduct();
    return () => {
      console.log("Hellllllllllllllllooooooo");
    };
  });

  return (
    <div>
      <button onClick={getProduct}>Click</button>
    </div>
  );
};

export default Home;
