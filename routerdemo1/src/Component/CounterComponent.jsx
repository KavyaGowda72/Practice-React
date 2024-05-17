import { useState } from "react";
import "../index.css";
const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };

  const onReset = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="counter-container">
        <p className="value-container"> Value : {counter}</p>
        <button className="button-container" onClick={onIncrement}>
          Increment
        </button>
        <button className="button-container" onClick={onDecrement}>
          Decrement
        </button>
        <button className="button-container" onClick={onReset}>
          Reset
        </button>
      </div>
    </>
  );
};
export default CounterComponent;
