import { loadUser, removeUser } from "../reducers/userSlice";
import axios from "./../../api/AxiosConfig";

export const asyncUserCurrent = (user) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadUser(user));
    else console.log("User not logged");
  } catch (error) {
    console.log(error);
  }
};

export const asyncUserLogout = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    console.log("user logged out");
  } catch (error) {
    console.log(error);
  }
};

export const asyncUserLogin = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser());
    console.log("User logged out successfully");
    // dispatch(asyncUserCurrent());
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);
    console.log(data);
    dispatch(asyncUserCurrent());
    localStorage.setItem("user", JSON.stringify(updatedUser.data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.delete("/users/" + id);
    console.log(data);

    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
};
