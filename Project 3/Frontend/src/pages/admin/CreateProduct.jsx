import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { asyncCreateProduct } from "../../store/actions/productActions";
import { toast } from "react-toastify";
const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);
    dispatch(asyncCreateProduct(product));
    navigate("/products");
    toast.success("Product created successfully");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      <form
        onSubmit={handleSubmit(createProductHandler)}
        className="w-full max-w-sm bg-white text-black p-6 rounded-lg shadow-xl flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1 font-medium">
            Title
          </label>

          <input
            {...register("title")}
            type="text"
            id="title"
            placeholder="Enter your title"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="mb-1 font-medium">
            Price
          </label>
          <input
            {...register("price")}
            type="price"
            id="price"
            placeholder="Enter your price"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="mb-1 font-medium">
            Image
          </label>
          <input
            {...register("image")}
            type="url"
            id="image"
            placeholder="Enter your image URL"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1 font-medium">
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            placeholder="Enter your description"
            className="resize-none h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1 font-medium">
            Category
          </label>
          <input
            {...register("category")}
            type="category"
            id="category"
            placeholder="Enter your category"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition duration-200 mt-2"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
