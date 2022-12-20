import { configureStore, createSlice } from "@reduxjs/toolkit";

let initialThemeState;

if (
  !localStorage.getItem("theme") ||
  localStorage.getItem("theme") === "light"
) {
  initialThemeState = {
    theme: "light",
  };
} else {
  initialThemeState = {
    theme: "dark",
  };
}

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    toggleTheme(state) {
      if (state.theme === "light") {
        state.theme = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        state.theme = "light";
        localStorage.setItem("theme", "light");
      }
    },
  },
});

export default themeSlice.reducer;
export const themeAction = themeSlice.actions;
