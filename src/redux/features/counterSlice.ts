import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = { count: 0 };

const counterSlice = createSlice({
 name: "counter",
 initialState,
 reducers: {
  increament: (state) => {
   state.count = state.count + 1
  },
  decrement: (state) => {
   state.count = state.count - 1
  },
  increamentBy: (state, action: PayloadAction<number>) => {
   state.count = state.count + action.payload
  },
  decrementBy: (state, action) => {
   state.count = state.count - action.payload.value;
  }
 }
})

export const { increament, decrement, increamentBy, decrementBy } = counterSlice.actions;

export default counterSlice.reducer;
