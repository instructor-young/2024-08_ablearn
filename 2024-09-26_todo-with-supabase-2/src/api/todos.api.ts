import { Todo } from "@/schema/todos.schema";
import supabase from "@/supabase/supabase.client";

async function getTodos() {
  const response = await supabase.from("todos").select("*");
  const todos = response.data;

  if (!todos) return [];

  return todos;
}

async function toggleIsCompleted(todo: Todo) {
  await supabase
    .from("todos")
    .update({ isCompleted: !todo.isCompleted })
    .eq("id", todo.id);
}

async function deleteTodo(todo: Todo) {
  await supabase.from("todos").delete().eq("id", todo.id);
}

const todosAPI = {
  getTodos,
  toggleIsCompleted,
  deleteTodo,
};

export default todosAPI;
