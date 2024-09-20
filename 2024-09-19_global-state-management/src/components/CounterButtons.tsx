import React from "react";
import { useCounterStore } from "../zustand/counterStore";
import { useShallow } from "zustand/shallow";

function CounterButtons() {
  const { increment, decrement } = useCounterStore(
    useShallow(({ increment, decrement }) => ({
      increment,
      decrement,
    }))
  );

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CounterButtons;
