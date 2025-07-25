import axios from "../../api/AxiosConfig";
import { loadProduct } from "../Reducers/ProductSlice";

export const asyncLoadProducts = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/products");
    console.log(data);
    dispatch(loadProduct(data));
  } catch (error) {
    console.log(error);
  }
};
