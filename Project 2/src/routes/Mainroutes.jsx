import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Recipes from "../Pages/Recipes";
import Createrecipe from "../Pages/Createrecipe";
import Recipedetails from "../Pages/Recipedetails";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/recipes/details/:id" element={<Recipedetails />}></Route>
        <Route path="/create" element={<Createrecipe />}></Route>
      </Routes>
    </div>
  );
};

export default Mainroutes;
