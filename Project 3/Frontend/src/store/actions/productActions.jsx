import { useDispatch } from "react-redux";
import axios from "../../api/AxiosConfig";
import { loadProduct } from "../reducers/productSlice";

export const asyncLoadProducts = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProduct(data));
  } catch (error) {}
};

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log();
  }
};

export const asyncUpdateProduct = (id,product) => async (dispatch, getState) => {
  try {
    await axios.patch("/products/" + id, product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};
export const asyncDeleteProduct = (id,product) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id, product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};
