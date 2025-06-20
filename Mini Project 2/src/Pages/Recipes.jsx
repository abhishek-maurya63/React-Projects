import React, { useContext, useEffect } from "react";
import { recipecontext } from "../Context/Recipecontext";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();
  const recipeDetails = (id) => {
    navigate(`/recipes/details/${id}`);
  };

  const { data, setdata } = useContext(recipecontext);

  const renderRecipes = data.map((recipe) => (
    <div
      key={recipe.id}
      className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700 text-white"
    >
      <div className="bg-gray-700 rounded-md h-60 mb-4 flex items-center justify-center text-gray-400 ">
        <img
          alt="Recipe"
          className="w-full h-full object-cover"
          src={recipe.Image}
        />
      </div>
      <h3 className="text-lg font-bold text-yellow-400 mb-2">{recipe.title}</h3>
      <p className="text-sm text-gray-400">Category: {recipe.Category}</p>

      <button
        onClick={() => recipeDetails(recipe.id)}
        className="w-full bg-blue-400 text-gray-900 font-semibold py-2 my-2 rounded hover:bg-blue-500 transition"
      >
        View Details
      </button>
    </div>
  ));

  return (
    <>
      <div className="bg-gray-800 min-h-screen p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderRecipes.length > 0 ? (
            renderRecipes
          ) : (
            <h1 className="text-white font-bold text-xl">
              Recipe not found!!!
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Recipes;
