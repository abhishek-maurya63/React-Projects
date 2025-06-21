import React from "react";
import Nav from "./Pages/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Nav />
      <Mainroutes />
      <select
        {...register("Category")}
        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Category</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
        <option value="dessert">Dessert</option>
      </select>
    </>
  );
};

export default App;
