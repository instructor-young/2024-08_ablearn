import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Introduction from "./Introduction";

function App() {
  const [input, setInput] = useState("");

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <Introduction name="유진영" age={35} greeting="안녕하세요">
        <p>만나서 반갑고 내일 또 봐요.</p>
      </Introduction>

      <input type="text" onChange={handleChangeInput} />
      <p>당신이 입력한 글자는 {input}입니다.</p>

      <hr />

      <Counter />
    </>
  );
}

export default App;
