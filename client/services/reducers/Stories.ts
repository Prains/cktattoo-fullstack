import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchStories from "../actions/fetchStories";

// Начальное состояние
const initialState: {
  stories: any;
  status: string;
} = {
  stories: null,
  status: "loading",
};

// Создание слайса
const userSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.status = "done";
        state.stories = action.payload;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// Экспорт reducer
export default userSlice.reducer;
