import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "../store/actions/userActions";
const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
  };
  return (
    <nav className="bg-gray-900 text-gray-200 px-6 py-4 flex gap-6 border-b border-gray-700">
      {user ? (
        <>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-cyan-400 transition-colors duration-200 ${
                isActive
                  ? "text-white font-semibold border-b-2 border-cyan-400 pb-1"
                  : ""
              }`
            }
          >
            Products
          </NavLink>
        
          <NavLink
            to="/admin/create-product"
            className={({ isActive }) =>
              `hover:text-cyan-400 transition-colors duration-200 ${
                isActive
                  ? "text-white font-semibold border-b-2 border-cyan-400 pb-1"
                  : ""
              }`
            }
          >
            Create Product
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:text-cyan-400 transition-colors duration-200 ${
                isActive
                  ? "text-white font-semibold border-b-2 border-cyan-400 pb-1"
                  : ""
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/admin/user-profile"
            className={({ isActive }) =>
              `hover:text-cyan-400 transition-colors duration-200 ${
                isActive
                  ? "text-white font-semibold border-b-2 border-cyan-400 pb-1"
                  : ""
              }`
            }
          >
            Settings
          </NavLink>
          <button
            onClick={logoutHandler}
            className="bg-blue-900 rounded p-1.5 text-center hover:bg-blue-950"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-cyan-400 transition-colors duration-200 ${
                isActive
                  ? "text-white font-semibold border-b-2 border-cyan-400 pb-1"
                  : ""
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:text-cyan-400 transition-colors duration-200 ${
                isActive
                  ? "text-white font-semibold border-b-2 border-cyan-400 pb-1"
                  : ""
              }`
            }
          >
            Cart
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
