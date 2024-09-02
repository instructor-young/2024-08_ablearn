import React, { useState } from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [introduction, setIntroduction] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(Number(event.target.value));
  };
  const handleChangeIntroduction = (event) => {
    setIntroduction(event.target.value);
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();

    console.log("이름", name);
    console.log("나이", age);
    console.log("자기소개", introduction);
  };

  return (
    <section>
      <h2>회원가입 양식</h2>

      <form onSubmit={handleSubmitForm}>
        <input
          value={name}
          onChange={handleChangeName}
          type="text"
          placeholder="이름을 입력해 주세요"
        />
        <input
          value={String(age)}
          onChange={handleChangeAge}
          type="number"
          placeholder="나이를 입력해 주세요"
        />
        <textarea
          value={introduction}
          onChange={handleChangeIntroduction}
          placeholder="자기소개를 써 주세요"
        />
        <button type="submit">회원가입하기</button>
      </form>
    </section>
  );
}

export default SignUpForm;
