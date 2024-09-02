import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClickCounter = () => setCount(count + 1);

  return (
    <section>
      <h2>카운터</h2>
      <strong>{count}</strong>
      <button onClick={handleClickCounter}>누르세요</button>
    </section>
  );
}

export default Counter;
