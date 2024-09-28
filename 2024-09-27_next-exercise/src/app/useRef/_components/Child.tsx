"use client";

import React, { useEffect, useState } from "react";

function Child({ countRef }: any) {
  const [count, setCount] = useState(100);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}

export default Child;
