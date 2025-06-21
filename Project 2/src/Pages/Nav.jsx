import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-white text-2xl font-extrabold tracking-wide">
            Yum!!!<span className="text-blue-400">Cuisin</span>
          </div>
          <ul className="flex space-x-30">
            <li>
              <NavLink
                className={(e) =>
                  e.isActive
                    ? "text-blue-400 text-sm font-medium"
                    : "text-white text-sm font-medium hover:text-blue-400 transition duration-300"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(e) =>
                  e.isActive
                    ? "text-blue-400 text-sm font-medium"
                    : "text-white text-sm font-medium hover:text-blue-400 transition duration-300"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(e) =>
                  e.isActive
                    ? "text-blue-400 text-sm font-medium"
                    : "text-white text-sm font-medium hover:text-blue-400 transition duration-300"
                }
                to="/recipes"
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                className={` ${(e) =>
                  e.isActive
                    ? "text-blue-400 text-sm font-medium"
                    : "text-white text-sm font-medium hover:text-blue-400 transition duration-300"}`}
                to="/create"
              >
                Create Recipe
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
