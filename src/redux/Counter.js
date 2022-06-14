import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

export const counterSlice = counterSlice({
  name: "counter",
  initialState: { data: 0 },
  reducers: {
    increment: (state, action) => {
      state.data += 1;
    },
    decrement: (state, action) => {
      state.data -= 1;
    },
  },
});

export default counterSlice.reducer;
