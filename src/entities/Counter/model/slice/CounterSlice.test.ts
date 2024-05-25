import counterSlice, { decrement, increment } from "./CounterSlice";
import { CounterShema } from "../types/CounterShema";

describe("CounterSlice", () => {
  test("increment", () => {
    const state: CounterShema = {
      value: 0,
    };
    expect(counterSlice(state, increment())).toEqual({ value: 1 });
  });
  test("decrement", () => {
    const state: CounterShema = {
      value: 0,
    };
    expect(counterSlice(state, decrement())).toEqual({ value: -1 });
  });
  test("should work with empty state", () => {
    const state: CounterShema = {
      value: 0,
    };
    expect(counterSlice(undefined, increment())).toEqual({ value: 1 });
  });
});
