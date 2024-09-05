import React, { useState } from "react";

/**
 * 인라인 스타일링
 */
function ColorChanger1() {
  const [selectedColor, setSelectedColor] = useState("black");

  const handleClickColorButton = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1
        style={{
          fontSize: 20,
          border: `1px solid ${selectedColor}`,
          color: selectedColor,
        }}
      >
        ColorChanger1
      </h1>

      <ul>
        <li>
          <button onClick={() => handleClickColorButton("red")}>빨강</button>
        </li>
        <li>
          <button onClick={() => handleClickColorButton("blue")}>파랑</button>
        </li>
        <li>
          <button onClick={() => handleClickColorButton("yellow")}>노랑</button>
        </li>
        <li>
          <button onClick={() => handleClickColorButton("orange")}>주황</button>
        </li>
        <li>
          <button onClick={() => handleClickColorButton("purple")}>보라</button>
        </li>
        <li>
          <button onClick={() => handleClickColorButton("black")}>검정</button>
        </li>
      </ul>
    </div>
  );
}

export default ColorChanger1;
