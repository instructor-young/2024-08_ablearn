import React, { useState } from "react";

function Arr() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const handleClickButton = () => {
    // 버튼을 누르면
    // 현재 numbers에 들어있는 값 중 가장 마지막 값 보다 1큰 값을
    // 새롭게 추가하는 로직
    const newValue = numbers[numbers.length - 1] + 1;

    // 방법 #1. 근데 잘 안 씀
    // const newArray = numbers.map((num) => num);
    // newArray.push(newValue);

    // 방법 #2. 훨씬 일반적으로 쓰임
    const newArray = [...numbers, newValue];

    setNumbers(newArray);
  };

  return (
    <div>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <button onClick={handleClickButton}>숫자 추가</button>
    </div>
  );
}

export default Arr;
