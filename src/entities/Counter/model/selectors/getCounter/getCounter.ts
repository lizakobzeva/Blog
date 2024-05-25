import { StateShema } from "app/providers/StoreProvider/config/StateShema";

export const getCounter = (state: StateShema) => state.counter;
