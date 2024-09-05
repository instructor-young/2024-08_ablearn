import React, { useState } from "react";
import "./ColorChanger2.css";

function ColorChanger2() {
  const [selectedColor, setSelectedColor] = useState("black");

  const handleClickColorButton = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1 className={`text-default ${selectedColor}`}>ColorChanger2</h1>

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

export default ColorChanger2;
