import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/Recipecontext";

const Recipedetails = () => {
  const { data } = useContext(recipecontext);
  const params = useParams();

  const recipeRender = data.find((item) => item.id === params.id);

  if (!recipeRender) {
    return (
      <div className="bg-gray-800 min-h-screen p-6 text-white">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-6 shadow-md border border-gray-700">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4">
            Recipe Not Found
          </h1>
          <p className="text-gray-400">
            The recipe you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  const ingreadientslist = recipeRender.Ingredients.split(",").map(
    (ingredient, index) => (
      <li key={index} className="text-gray-400">
        {ingredient}
      </li>
    )
  );

  return (
    <>
      <div className="bg-gray-800 min-h-screen p-6 text-white">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-6 shadow-md border border-gray-700">
          <div className="mb-6">
            <img
              src={recipeRender.Image}
              alt="Recipe"
              className="w-full h-80 object-cover rounded-md"
            />
          </div>
          <h1 className="text-3xl font-bold text-yellow-400 mb-4">
            {recipeRender.title}
          </h1>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-white">Category:</span>{" "}
            {recipeRender.Category}
          </p>
          <p className="text-gray-400 mb-4">
            <span className="font-semibold text-white">Description:</span> Lorem
            {recipeRender.Discription}
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-white mb-2">
              Ingredients:
            </h2>
            {ingreadientslist.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">{ingreadientslist}</ul>
            ) : (
              <p className="text-gray-400">No ingredients listed.</p>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Instructions:
            </h2>
            <p className="text-gray-400">{recipeRender.Instructions}</p>
          </div>
          <div className="mt-4 flex place-content-end gap-10">
            <button className="px-5 py-2 bg-green-700 rounded text-lg hover:bg-green-800">
              Update
            </button>
            <button className="px-5 py-2 bg-red-700 rounded text-lg hover:bg-red-800">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipedetails;
