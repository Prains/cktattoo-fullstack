import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const fetchMasters = createAsyncThunk("masters/fetchMasters", async () => {
  try {
    const data = await api.get(`${routes.backend}/api/masters?populate=*`);
    return data.data;
  } catch (error) {
    return error;
  }
});

export default fetchMasters;
