"use client";

import { FaPlusCircle } from "react-icons/fa";
import Input from "@/components/Input";
import React, { ComponentProps, useState } from "react";
import Button from "@/components/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/api";

function NewTodoForm() {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");
  const { mutate: createTodo } = useMutation({
    mutationFn: api.todos.createTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const handleSubmitNewTodo: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    createTodo(content);
    setContent("");
  };

  return (
    <form className="flex px-5 py-4 gap-x-2.5" onSubmit={handleSubmitNewTodo}>
      <Input
        wrapperClassName="grow"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      />

      <Button>
        <FaPlusCircle className="text-2xl" />
      </Button>
    </form>
  );
}

export default NewTodoForm;
