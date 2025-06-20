import { Routes, Route } from "react-router-dom";
import Products from "./../pages/Products";
import Login from "./../pages/Login";
import Register from "./../pages/Register";

import CreateProduct from "./../pages/admin/CreateProduct";
import ProductDetail from "../pages/admin/ProductDetail";
import { useSelector } from "react-redux";
import UserProfile from "../pages/user/UserProfile";
import PageNotFound from "../pages/PageNotFound";
import Cart from "../pages/Cart";
const Mainroutes = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/admin/user-profile" element={<UserProfile />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
