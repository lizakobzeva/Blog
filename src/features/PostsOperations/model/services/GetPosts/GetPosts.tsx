import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPosts = createAsyncThunk("posts/getposts", async () => {
  try {
    const response = await axios.get("https://blogjsonapi.onrender.com/posts");
    return response.data;
  } catch (e) {
    return "error";
  }
});
