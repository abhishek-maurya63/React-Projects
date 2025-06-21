import { nanoid } from "nanoid";
import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/Recipecontext";
import { toast } from "react-toastify";

const Createrecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe]);
    toast.success("Recipe added successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(data);
    // reset();
  };

  return (
    <div className="text-black max-w-xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
      <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
        {/* Image URL */}
        <div>
          <input
            type="url"
            {...register("Image")}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <small className="text-red-500 text-sm">
            {errors.Image && errors.Image.message}
          </small>
        </div>

        <div>
          <input
            type="text"
            {...register("title")}
            placeholder="Recipe Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <small className="text-red-500 text-sm">
            {errors.Image && errors.Image.message}
          </small>
        </div>

        <div>
          <textarea
            {...register("Ingredients")}
            placeholder="Write ingredients separated by commas"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <small className="text-red-500 text-sm">
            {errors.Image && errors.Image.message}
          </small>
        </div>

        <div>
          <textarea
            {...register("Instructions")}
            placeholder="Instructions for the recipe"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <small className="text-red-500 text-sm">
            {errors.Image && errors.Image.message}
          </small>
        </div>

        <div>
          <textarea
            {...register("Discription")}
            placeholder="Write a brief description of the recipe"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <small className="text-red-500 text-sm">
            {errors.Image && errors.Image.message}
          </small>
        </div>
        <div>
          <select
            {...register("Category")}
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Select Category
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
            <option value="dessert">Dessert</option>
          </select>

          <small className="text-red-500 text-sm">
            {errors.Image && errors.Image.message}
          </small>
        </div>
        <button className=" text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
          Click to Submit
        </button>
      </form>
    </div>
  );
};

export default Createrecipe;
