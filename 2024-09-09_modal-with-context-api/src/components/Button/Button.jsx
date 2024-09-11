import React from "react";

function Button() {
  console.log("Button .. 함수 호출됨");
  return <button>Button</button>;
}

export default React.memo(Button);
