import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    mode: "list", 
  },
  reducers: {
    toggleCard(state) {
      state.mode = "card";
    },
    toggleList(state) {
      state.mode = "list";
    },
  },
});

export const { toggleCard, toggleList } = viewSlice.actions;
export default viewSlice.reducer;
