"use client";

import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import TodosListItem from "./TodosListItem";

function TodosList() {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: api.todos.getTodos,
    initialData: [],
  });

  const notCompletedTodos = todos!.filter((todo) => !todo.isCompleted);
  const completedTodos = todos!.filter((todo) => todo.isCompleted);
  const sortedTodos = [...notCompletedTodos, ...completedTodos];

  return (
    <ul>
      {sortedTodos?.map((todo) => (
        <li key={todo.id}>
          <TodosListItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
