import { StateShema } from "app/providers/StoreProvider/config/StateShema";

export const getPostErrorSelector = (state: StateShema) =>
  state?.posts?.isError;
