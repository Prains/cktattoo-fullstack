import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const fetchReviews = createAsyncThunk("reviews/fetchReviews", async () => {
  try {
    const data = await api.get(`${routes.backend}/api/review?populate=*`);
    return data.data.attributes.image.data;
  } catch (error) {
    return error;
  }
});

export default fetchReviews;
