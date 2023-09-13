import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IMaster from "@/interfaces/IMaster";
import fetchMasters from "../actions/fetchMasters";

// Начальное состояние
const initialState: {
  masters: IMaster[] | null;
  status: string;
} = {
  masters: null,
  status: "loading",
};

// Создание слайса
const userSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMasters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMasters.fulfilled, (state, action) => {
        state.status = "done";
        state.masters = action.payload;
      })
      .addCase(fetchMasters.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// Экспорт reducer
export default userSlice.reducer;
