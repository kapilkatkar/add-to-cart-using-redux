import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  value: 0,
};

const calcuatorV2Slice = createSlice({
  name: "calculatorV2",
  initialState,
  reducers: {
    add: (state) => {
      state.isLoading = true;
    },
    addSuccess: (state, action) => {
      state.isLoading = false;
      state.value = action.payload.result;
    },
    addFailed: (state) => {
      state.isLoading = false;
      state.value = 0;
    },
  },
});

export const { add, addSuccess, addFailed } = calcuatorV2Slice.actions;

export default calcuatorV2Slice.reducer;
