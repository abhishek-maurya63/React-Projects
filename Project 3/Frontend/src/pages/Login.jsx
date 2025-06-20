import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { asyncUserLogin } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = (user) => {
    dispatch(asyncUserLogin(user));
    toast.success("Login successful");
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full max-w-sm bg-white text-black p-6 rounded-lg shadow-xl flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition duration-200 mt-2"
        >
          Login
        </button>

        <Link to="/register" className="underline hover:text-blue-600">
          {" "}
          Don't have account
        </Link>
      </form>
    </div>
  );
};

export default Login;
