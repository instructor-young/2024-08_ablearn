/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";

const colors = [
  ["빨강", "red"],
  ["파랑", "blue"],
  ["노랑", "yellow"],
  ["주황", "orange"],
  ["보라", "purple"],
  ["검정", "black"],
];

function ColorChanger4() {
  const [color, setColor] = useState("black");

  const handleClickColorButton = (color) => () => setColor(color);

  return (
    <div>
      <Title color={color}>ColorChanger4</Title>

      <ul>
        {colors.map(([label, color]) => (
          <li key={color}>
            <ColorButton
              label={label}
              onClick={handleClickColorButton(color)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ColorButton({ onClick: handleClick, label }) {
  return <button onClick={handleClick}>{label}</button>;
}

const Title = styled.h1`
  font-size: 20px;
  ${(props) => `
    border: 1px solid ${props.color};
    color: ${props.color};
  `}
`;

export default ColorChanger4;
