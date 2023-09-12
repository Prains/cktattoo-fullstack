import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const fetchPortfolio = createAsyncThunk(
  "portfolio/fetchPortfolio",
  async () => {
    try {
      const data = await api.get(
        `${routes.backend}/api/portolio-images?populate=*`,
      );
      return data.data;
    } catch (error) {
      return error;
    }
  },
);

export default fetchPortfolio;
