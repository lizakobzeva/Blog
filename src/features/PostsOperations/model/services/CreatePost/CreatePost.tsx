import { AsyncThunkAction, Dispatch, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "shared/const/axios";
import { AppDispatch, ThunkExtraArg } from "app/providers/StoreProvider";
import { GetPosts } from "../GetPosts/GetPosts";
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
  async (
    postData: CreatePostTypes,
    thunkApi: { extra: ThunkExtraArg; dispatch: Dispatch }
  ) => {
    const extra = thunkApi?.extra;
    const dispatch: AppDispatch = thunkApi?.dispatch;
    try {
      const response = await axios.post(`${baseUrl}/posts`, postData);
      extra?.navigate("/");
      dispatch(GetPosts());
      return response.data.posts;
    } catch (e) {
      // return thunkApi.rejectWithValue("error");
    }
  }
);
