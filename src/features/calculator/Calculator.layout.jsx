import { useDispatch, useSelector } from "react-redux";
import { add, subtract, multiply, divide } from "../calculator.slice";

const Calculator = () => {
  const calculatorState = useSelector((state) => state.calculatorStore);
  const dispatch = useDispatch();

  return (
    <div>
      <div>CALCULATOR</div>
      <div>Result : {calculatorState.value} </div>
      <button
        onClick={() => {
          dispatch(add(4));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(subtract(4));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(multiply(4));
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          dispatch(divide(4));
        }}
      >
        /
      </button>
    </div>
  );
};
export default Calculator;
