import React from "react";
import { useCounterStore } from "../zustand/counterStore";

function CounterDisplay() {
  const count = useCounterStore((state) => state.count);
  return <div>{count}</div>;
}

export default CounterDisplay;
