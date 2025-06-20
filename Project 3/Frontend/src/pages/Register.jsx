import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    navigate("/login")
    toast.success("Registration successful");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full max-w-sm bg-white text-black p-6 rounded-lg shadow-xl flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 font-medium">
            Username
          </label>

          <input
            {...register("username")}
            type="text"
            id="username"
            placeholder="Enter your username"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

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
          Register
        </button>

        <Link to="/login" className="underline hover:text-blue-600">
          {" "}
          Already have an account
        </Link>
      </form>
    </div>
  );
};

export default Register;
