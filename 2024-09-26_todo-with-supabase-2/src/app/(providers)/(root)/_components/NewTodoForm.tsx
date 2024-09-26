"use client";

import supabase from "@/supabase/supabase.client";
import React, { Dispatch, SetStateAction, useState } from "react";

interface NewTodoFormProps {
  setTodosRefetchCount: Dispatch<SetStateAction<number>>;
}

function NewTodoForm({ setTodosRefetchCount }: NewTodoFormProps) {
  const [content, setContent] = useState("");

  const handleClickAdd = async () => {
    await supabase.from("todos").insert({ content });

    setContent("");
    setTodosRefetchCount((prev) => prev + 1);
  };

  return (
    <div className="border-b py-2.5 px-5 flex">
      <input
        type="text"
        placeholder="새로운 할 일을 적어주세요"
        className="grow border p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      />
      <button
        onClick={handleClickAdd}
        className="bg-black text-white p-2 font-bold text-sm"
      >
        추가하기
      </button>
    </div>
  );
}

export default NewTodoForm;
