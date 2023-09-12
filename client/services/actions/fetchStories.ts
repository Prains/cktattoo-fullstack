import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const fetchStories = createAsyncThunk("stories/fetchStories", async () => {
  try {
    const data = await api.get(`${routes.backend}/api/story?populate=*`);
    return data.data.attributes.image.data;
  } catch (error) {
    return error;
  }
});

export default fetchStories;
