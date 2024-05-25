import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { USER_LOCALSTORAGE_KEY } from "../../../../shared/const/localStorage";
import { CartShema } from "../types/cart";

const initialState: CartShema = {};
export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemInCart: (state, action: PayloadAction<string>) => {
      state.cart?.push(action.payload);
    },
    initCart: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.cart = JSON.parse(user).user.cart;
      }
    },
    // logout: (state) => {
    //   // state.authData = undefined;
    //   localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    // },
  },
});

export const { AddItemInCart, initCart } = userSlice.actions;

export default userSlice.reducer;
