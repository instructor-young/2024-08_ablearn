"use client";
import { Database, Tables } from "@/supabase/database.types";
import supabase from "@/supabase/supabase.client";
import React, { useEffect, useState } from "react";

interface TodosListProps {
  todosRefetchCount: number;
}

function TodosList({ todosRefetchCount }: TodosListProps) {
  const [todos, setTodos] = useState<Tables<"todos">[]>([]);

  useEffect(() => {
    (async () => {
      const response = await supabase.from("todos").select("*");
      const todos = response.data;

      if (!todos) return;

      setTodos(todos);
    })();
  }, [todosRefetchCount]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  );
}

export default TodosList;
