import React, { useState } from "react";
import styled from "styled-components";

function ColorChanger3() {
  const [color, setColor] = useState("black");

  const handleClickColorButton = (color) => {
    setColor(color);
  };

  return (
    <div>
      <Title color={color}>ColorChanger3</Title>

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

const Title = styled.h1`
  font-size: 20px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
`;

export default ColorChanger3;
