import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("최초 렌더링 이후 딱 한 번");
  }, []);

  return (
    <div>
      <h6>{count}</h6>
      <button onClick={handleClickButton}>누르면 1 증가</button>
    </div>
  );
}

export default Counter;
