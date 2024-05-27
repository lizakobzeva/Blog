import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPost = createAsyncThunk(
  "posts/getpost",
  async (postId: string) => {
    try {
      const response = await axios.get(`http://localhost:8000/posts/${postId}`);

      return response.data;
    } catch (e) {
      return "error";
    }
  }
);
