"use client";

import NewTodoForm from "./_components/NewTodoForm";
import TodosList from "./_components/TodosList";

function TodoListPage() {
  return (
    <div className="">
      <NewTodoForm />

      <TodosList />
    </div>
  );
}

export default TodoListPage;
