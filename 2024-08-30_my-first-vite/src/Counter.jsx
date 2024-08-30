import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClickCounter = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <strong>{count}</strong>
      <br />
      <button onClick={handleClickCounter}>1씩 증가시키기</button>
    </section>
  );
}

export default Counter;
