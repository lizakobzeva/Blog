import Button from "shared/ui/Button";
import { decrement, increment } from "../model/slice/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import style from "./Counter.module.scss";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  const Increment = () => {
    dispatch(increment());
  };
  const Decrement = () => {
    dispatch(decrement());
  };
  return (
    <div className={style.Counter}>
      <Button onClick={Increment}>increment</Button>
      <h2>{value}</h2>
      <Button onClick={Decrement}>decrement</Button>
    </div>
  );
};

export default Counter;
