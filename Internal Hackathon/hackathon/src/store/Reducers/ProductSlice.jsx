import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
};
const Productlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // removeproduct: (state, action) => {
    //   state.product = state.product.filter(
    //     (product) => product.id !== action.payload
    //   );
    // },

    loadProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export default Productlice.reducer;
export const { removeproduct, loadProduct } = Productlice.actions;
