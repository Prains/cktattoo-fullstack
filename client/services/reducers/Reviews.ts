import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IReview from "@/interfaces/IReview";
import fetchReviews from "../actions/fetchReviews";

// Начальное состояние
const initialState: {
  reviews: IReview | null;
  status: string;
} = {
  reviews: null,
  status: "loading",
};

// Создание слайса
const userSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "done";
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// Экспорт reducer
export default userSlice.reducer;
