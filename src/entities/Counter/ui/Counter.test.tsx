import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { StoreProvider } from "app/providers/StoreProvider";

describe("Button tests", () => {
  test("Test render", () => {
    render(
      <StoreProvider initialState={{ counter: { value: 10 } }}>
        <Counter />
      </StoreProvider>
    );
    expect(screen.getByText("10")).toBeInTheDocument();
  });
  test("Test increment", () => {
    render(
      <StoreProvider initialState={{ counter: { value: 10 } }}>
        <Counter />
      </StoreProvider>
    );
    fireEvent.click(screen.getByText("increment"));
    expect(screen.getByText("11")).toBeInTheDocument();
  });
  test("Test decrement", () => {
    render(
      <StoreProvider initialState={{ counter: { value: 10 } }}>
        <Counter />
      </StoreProvider>
    );
    fireEvent.click(screen.getByText("decrement"));
    expect(screen.getByText("9")).toBeInTheDocument();
  });
});
