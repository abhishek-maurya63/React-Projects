import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  asyncDeleteUser,
  asyncUpdateUser,
} from "../../store/actions/userActions";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.users);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        password: user.password,
        username: user.username,
      });
    }
  }, [user, reset]);

  const updateUserHandler = (data) => {
    if (!user) return; // Prevent error if user is not loaded
    dispatch(asyncUpdateUser(user.id, data));
    navigate("/");
  };

  const userDeleteHandler = () => {
    if (!user) return; // Prevent error if user is not loaded
    dispatch(asyncDeleteUser(user.id));
  };
  return user ? (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-2xl font-bold mb-8">Update User</h1>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>{" "}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <form
          onSubmit={handleSubmit(updateUserHandler)}
          className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <div>
            <label className="block mb-1 font-semibold">Username</label>
            <input
              {...register("username")}
              type="text"
              placeholder="Enter new username"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              {...register("email")}
              type="text"
              placeholder="Enter image email"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter new password"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-md mt-4"
            >
              Update User
            </button>

            <button
              onClick={() => userDeleteHandler()}
              type="button"
              className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md mt-4"
            >
              Delete User
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default UserProfile;
