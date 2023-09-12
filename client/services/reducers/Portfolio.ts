import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPortfolioImage from "@/interfaces/IPortfolioImage";
import fetchPortfolio from "../actions/fetchPortfolio";

// Начальное состояние
const initialState: {
  portfolio: IPortfolioImage | null;
  status: string;
} = {
  portfolio: null,
  status: "loading",
};

// Создание слайса
const userSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolio.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.status = "done";
        state.portfolio = action.payload;
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// Экспорт reducer
export default userSlice.reducer;
