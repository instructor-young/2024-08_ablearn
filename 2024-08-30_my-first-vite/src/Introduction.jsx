import React from "react";

/* eslint-disable react/prop-types */
function Introduction(props) {
  const { greeting, name, age, children } = props;

  console.log("나 리렌더링됨");

  return (
    <>
      <h1>
        {greeting}. 저는 {name}입니다.
      </h1>

      <p>제 나이는 {age}입니다.</p>
      {children}
    </>
  );
}

export default Introduction;
