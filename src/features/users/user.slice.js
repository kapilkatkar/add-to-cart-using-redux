import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results;
    },
    getUserFailed: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { getUsers, getUserSuccess, getUserFailed } = userSlice.actions;
export default userSlice.reducer;
