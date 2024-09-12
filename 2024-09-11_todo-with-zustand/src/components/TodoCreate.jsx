import React, { useState } from "react";
import { useNavigate } from "../zustand/stores/router.store";
import useTodoStore from "../zustand/stores/todo.store";

function TodoCreate() {
  const [content, setContent] = useState("");
  const createTodo = useTodoStore((state) => state.createTodo);
  const navigate = useNavigate();
  const handleChangeInput = (e) => setContent(e.target.value);
  const handleClickCreateButton = () => {
    createTodo(content);
    navigate("list");
  };

  return (
    <div className="p-5 flex gap-x-2.5">
      <input
        className="border border-black"
        value={content}
        onChange={handleChangeInput}
        type="text"
        autoFocus
      />

      <button onClick={handleClickCreateButton} className="border">
        생성하기
      </button>
    </div>
  );
}

export default React.memo(TodoCreate);
