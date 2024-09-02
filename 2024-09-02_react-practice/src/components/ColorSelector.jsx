import React, { useState } from "react";

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <section>
      <h2>색상 선택기</h2>
      <div
        style={{ backgroundColor: selectedColor, width: 100, height: 100 }}
      ></div>
      <ul>
        <li>
          <button onClick={() => setSelectedColor("red")}>빨강</button>
        </li>
        <li>
          <button onClick={() => setSelectedColor("blue")}>파랑</button>
        </li>
        <li>
          <button onClick={() => setSelectedColor("yellow")}>노랑</button>
        </li>
      </ul>
    </section>
  );
}

export default ColorSelector;
