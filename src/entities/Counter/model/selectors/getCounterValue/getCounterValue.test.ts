import { StateShema } from "app/providers/StoreProvider/config/StateShema";
import { getCounterValue } from "./getCounterValue";
describe("getCounterValue", () => {
  test("should return counter value", () => {
    const state: Partial<StateShema> = {
      counter: { value: 0 },
    };
    expect(getCounterValue(state as StateShema)).toEqual(0);
  });
});
