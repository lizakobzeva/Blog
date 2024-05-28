import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPost = createAsyncThunk(
  "posts/getpost",
  async (postId: string) => {
    try {
      const response = await axios.get(
        `https://blogjsonapi.onrender.com/posts/${postId}`
      );

      return response.data;
    } catch (e) {
      return "error";
    }
  }
);
