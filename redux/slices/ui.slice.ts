import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  isDarkMode: boolean;
}

const initialState: UIState = {
  isDarkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const uiActions = {
  ...uiSlice.actions,
};

export default uiSlice.reducer;
