import { createSlice } from "@reduxjs/toolkit";

const CalculatorSlice = createSlice({
  name: "calculator",
  initialState: { value: 0 },
  reducers: {
    add: (state, action) => {
      state.value = state.value + Number(action.payload);
    },

    subtract: (state, action) => {
      state.value = state.value - Number(action.payload);
    },

    multiply: (state, action) => {
      state.value = state.value * Number(action.payload);
    },

    divide: (state, action) => {
      state.value = state.value / Number(action.payload);
    },
  },
});

export const { add, subtract, multiply, divide } = CalculatorSlice.actions;
export default CalculatorSlice.reducer;
