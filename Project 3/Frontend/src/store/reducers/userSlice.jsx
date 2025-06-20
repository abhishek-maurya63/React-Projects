import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.users = action.payload;
    },
    removeUserUser: (state) => {
      state.users = null;
    },
  },
});

export default userSlice.reducer;
export const { loadUser , removeUser } = userSlice.actions;