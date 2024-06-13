import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "shared/const/axios";

export const GetPosts = createAsyncThunk("posts/getposts", async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);

    return response.data;
  } catch (e) {
    return "error";
  }
});
