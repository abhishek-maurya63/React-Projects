import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/productActions";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.productReducer.products);
  const product = products.find((product) => product.id === id);
  const user = useSelector((state) => state.userReducer.users);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      description: product?.description,
      price: product?.price,
    },
  });

  useEffect(() => {
    if (product) {
      reset({
        image: product.image,
        title: product.title,
        description: product.description,
        price: product.price,
      });
    }
  }, [product, reset]);

  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product));
    console.log("Product updated successfully", product);
  };

  const productDeleteHandler = (product) => {
    dispatch(asyncDeleteProduct(id, product));
    console.log("Product deleted successfully");
    navigate("/products");
  };

  return product ? (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-2xl font-bold mb-8">Update Product</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Display Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <img
            src={product.image}
            alt="Product"
            className="w-full h-64 object-contain bg-gray-700 p-4 rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-sm text-gray-300 mb-4">{product.description}</p>
          <div className="flex justify-between items-center ">
            <p className="text-cyan-400 font-bold text-lg">₹{product.price}</p>

            {user &&
              user.isAdmin(
                <button
                  onClick={productDeleteHandler}
                  className="bg-red-600 rounded m-1.5 p-1.5 text-center hover:bg-red-900"
                >
                  Delete Product
                </button>
              )}
          </div>
        </div>

        {/* Product Update Form */}

        {user &&
          user.isAdmin(
            <form
              onSubmit={handleSubmit(updateProductHandler)}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col gap-4"
            >
              <div>
                <label className="block mb-1 font-semibold">Title</label>
                <input
                  {...register("title")}
                  type="text"
                  placeholder="Enter new title"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Description</label>
                <textarea
                  {...register("description")}
                  rows="4"
                  placeholder="Update description..."
                  className="w-full resize-none px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>

              <div>
                <label className="block mb-1 font-semibold">Price</label>
                <input
                  {...register("price")}
                  type="number"
                  placeholder="Enter new price"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Image URL</label>
                <input
                  {...register("image")}
                  type="text"
                  placeholder="Enter image URL"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <button className="bg-cyan-600 hover:bg-cyan-700 py-2 px-4 rounded-md mt-4">
                Update Product
              </button>
            </form>
          )}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductDetail;
