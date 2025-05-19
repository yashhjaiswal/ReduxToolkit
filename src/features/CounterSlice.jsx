import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 4,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 0) {
        return;
      }
      else {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    multiplyByAmount: (state, action) => {
      state.value *= action.payload;
    }
  },
});

export const { increment, decrement, incrementByAmount, multiplyByAmount } = counterSlice.actions;

export default counterSlice.reducer