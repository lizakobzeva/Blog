import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPost = createAsyncThunk(
  "posts/getpost",
  async (postId: string) => {
    try {
      const response = await axios.get(
        `https://test-l2v1.onrender.com/${postId}`
      );

      return response.data;
    } catch (e) {
      return "error";
    }
  }
);
