import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./CalcualtorV2.Slice";
import { FadeLoader } from "react-spinners";

const CalcualtorV2 = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const dispatch = useDispatch();
  const addV2 = useSelector((state) => state.addV2);

  console.log("addV2 :", addV2);

  const onAddNumbers = () => {
    dispatch(add({ num1, num2 }));
  };

  return (
    <div>
      <h1>{addV2.isLoading ? <FadeLoader /> : addV2.value}</h1>

      <div>
        <p>Number 1</p>
        <input
          type="text"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div>
        <p>Number 2</p>
        <input
          type="text"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onAddNumbers}>Add Number</button>
      </div>
    </div>
  );
};

export default CalcualtorV2;
