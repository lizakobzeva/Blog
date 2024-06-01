import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface CreatePostTypes {
  date: string;
  title: string;
  text: string;
  imageUrl: string;
  userId: string;
  id: string;
}

export const CreatePost = createAsyncThunk(
  "posts/CreatePost",
  async (postData: CreatePostTypes, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://blogjsonapi.onrender.com/posts",
        postData
      );

      return response.data.posts;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
