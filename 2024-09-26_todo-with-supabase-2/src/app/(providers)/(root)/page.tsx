"use client";

import { useEffect, useState } from "react";
import NewTodoForm from "./_components/NewTodoForm";
import TodosList from "./_components/TodosList";
import { useAuth } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";

function HomePage() {
  const [todosRefetchCount, setTodosRefetchCount] = useState(0);
  const { isAuthInitialized, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isLoggedIn) router.replace("/log-in");
  }, [isAuthInitialized, isLoggedIn]);

  if (!isAuthInitialized) return <div>로그인 확인 중...</div>;
  if (!isLoggedIn) return <div>로그인 확인 중...</div>;

  return (
    <div>
      <NewTodoForm setTodosRefetchCount={setTodosRefetchCount} />
      <TodosList todosRefetchCount={todosRefetchCount} />
    </div>
  );
}

export default HomePage;
