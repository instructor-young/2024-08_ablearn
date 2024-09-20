import React from "react";

interface CounterButtonsProps {
  increment: () => void;
  decrement: () => void;
}

function CounterButtons({ increment, decrement }: CounterButtonsProps) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CounterButtons;
