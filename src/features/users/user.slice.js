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

/**
 * step 1 - create slice
 * step 2 - connect slice to the store
 * step 3 - create saga file
 * step 4 - then create layout.
 */
