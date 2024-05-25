import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { CreateReduxStore } from "../config/store";
import { StateShema } from "../config/StateShema";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: Partial<StateShema>;
}
export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
}) => {
  const store = CreateReduxStore(initialState as StateShema);
  return <Provider store={store}>{children}</Provider>;
};
export { CreateReduxStore };
