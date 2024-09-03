/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Todo(props) {
  const {
    todo,
    handleClickDelete,
    handleClickToggleIsCompleted,
    handleClickEdit,
  } = props;
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
  };

  return (
    <>
      <p
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "none",
        }}
      >
        {todo.content}
      </p>
      <input value={inputValue} onChange={handleChangeInput} type="text" />
      <button onClick={() => handleClickEdit(todo.id, inputValue)}>수정</button>
      <button onClick={() => handleClickDelete(todo.id)}>삭제</button>
      <button onClick={() => handleClickToggleIsCompleted(todo.id)}>
        완료/미완료
      </button>
    </>
  );
}

export default Todo;
