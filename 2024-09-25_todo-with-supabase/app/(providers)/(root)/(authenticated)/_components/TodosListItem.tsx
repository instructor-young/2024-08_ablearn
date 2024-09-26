"use client";

import api from "@/api/api";
import { Tables } from "@/supabase/database.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cx } from "class-variance-authority";
import React from "react";

interface TodosListItemProps {
  todo: Tables<"todos">;
}

function TodosListItem({ todo }: TodosListItemProps) {
  const queryClient = useQueryClient();
  const { mutate: toggleIsComplete } = useMutation({
    mutationFn: api.todos.toggleIsComplete,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const handleClickListItem = () => {
    toggleIsComplete({ todoId: todo.id, prevValue: todo.isCompleted });
  };

  return (
    <button
      className="flex items-center border-t px-5 py-2 w-full"
      onClick={handleClickListItem}
    >
      <span
        className={cx(
          todo.isCompleted ? "text-gray-500 line-through" : "text-gray-900"
        )}
      >
        {todo.content}
      </span>
    </button>
  );
}

export default TodosListItem;
