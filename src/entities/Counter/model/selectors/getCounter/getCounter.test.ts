import { StateShema } from "app/providers/StoreProvider/config/StateShema";
import { getCounter } from "./getCounter";
describe("getCounter", () => {
  test("should return counter value", () => {
    const state: Partial<StateShema> = {
      counter: {
        value: 0,
      },
    };
    expect(getCounter(state as StateShema)).toEqual({ value: 0 });
  });
});
