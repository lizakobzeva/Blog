import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserShema } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const initialState: UserShema = {};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      console.log(action.payload);
      state.authData = action.payload;
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(action.payload)
      );
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { setAuthData, initAuthData, logout } = userSlice.actions;

export default userSlice.reducer;
