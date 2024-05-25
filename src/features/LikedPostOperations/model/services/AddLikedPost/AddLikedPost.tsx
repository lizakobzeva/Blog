import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import { setAuthData } from "entities/User/model/slice/UserSlice";
import { User } from "entities/User/model/types/user";
import { useSelector } from "react-redux";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface AddItemInCartTypes {
  id: string;
  likedPosts: Array<string>;
}
export const AddLikedPost = createAsyncThunk(
  "register/AddLikedPost",
  async (authData: AddItemInCartTypes, thunkAPI) => {
    try {
      const response = await axios.patch<User>(
        `http://localhost:8000/users/${authData.id}`,
        authData
      );

      console.log(response.data);
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      thunkAPI.dispatch(setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
