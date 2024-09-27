"use client";
import api from "@/api/api";
import { Todo } from "@/schema/todos.schema";
import { Database, Tables } from "@/supabase/database.types";
import supabase from "@/supabase/supabase.client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cva, cx } from "class-variance-authority";
import React, {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface TodosListProps {
  todosRefetchCount: number;
  setTodosRefetchCount: Dispatch<SetStateAction<number>>;
}

function TodosList({
  todosRefetchCount,
  setTodosRefetchCount,
}: TodosListProps) {
  const queryClient = useQueryClient();

  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: api.todos.getTodos,
    initialData: [],
  });

  const { mutate: toggleIsCompleted } = useMutation({
    mutationFn: api.todos.toggleIsCompleted,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleClickTodo = async (todo: Todo) => {
    // todo의 isCompleted를 토글하는 코드를 작성할 예정
    toggleIsCompleted(todo);
  };

  const handleClickDeleteTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    todo: Todo
  ) => {
    e.stopPropagation();
  };

  return (
    <ul className="grid grid-cols-1 gap-y-1 bg-gray-100">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div
            onClick={() => handleClickTodo(todo)}
            className={cx(
              todo.isCompleted && "text-gray-400 line-through",
              "cursor-pointer px-5 py-2 bg-white w-full hover:brightness-90 active:brightness-75 flex justify-between"
            )}
          >
            <span>{todo.content}</span>
            <button onClick={(e) => handleClickDeleteTodo(e, todo)}>
              삭제
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
