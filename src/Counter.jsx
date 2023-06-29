import { useState } from "react";

let intervalInstance = null;

const Counter = ({}) => {
  const [count, setCount] = useState(0);
  const [counterStarted, toggleCounterStarted] = useState(false);

  const onStartStop = () => {
    if (counterStarted) {
      if (intervalInstance) {
        clearInterval(intervalInstance);
      }
    } else {
      intervalInstance = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
    toggleCounterStarted((val) => !val);
  };

  const onReset = () => {
    if (intervalInstance) {
      clearInterval(intervalInstance);
      toggleCounterStarted(false);
      setCount(0);
    }
  };

  return (
    <div className="counter-container">
      <div className="counter-container__value">{count}</div>
      <div className="counter-container__cta">
        <button onClick={onStartStop}>
          {counterStarted ? "Pause" : "Start"}
        </button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
