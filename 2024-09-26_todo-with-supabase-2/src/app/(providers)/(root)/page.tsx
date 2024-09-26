"use client";

import { useState } from "react";
import NewTodoForm from "./_components/NewTodoForm";
import TodosList from "./_components/TodosList";

function HomePage() {
  const [todosRefetchCount, setTodosRefetchCount] = useState(0);

  return (
    <div>
      <NewTodoForm setTodosRefetchCount={setTodosRefetchCount} />
      <TodosList todosRefetchCount={todosRefetchCount} />
    </div>
  );
}

export default HomePage;
