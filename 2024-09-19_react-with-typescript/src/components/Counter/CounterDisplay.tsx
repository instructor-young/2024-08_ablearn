import React from "react";

interface CounterDisplayProps {
  count: number;
}

function CounterDisplay(props: CounterDisplayProps) {
  return <h1>{props.count}</h1>;
}

export default CounterDisplay;
