import supabase from "@/supabase/client";

async function getTodos() {
  const response = await supabase.from("todos").select("*");
  const data = response.data;

  return data;
}

async function createTodo(content: string) {
  await supabase.from("todos").insert({ content });
}

async function toggleIsComplete(data: { todoId: number; prevValue: boolean }) {
  await supabase
    .from("todos")
    .update({ isCompleted: !data.prevValue })
    .eq("id", data.todoId);
}

const todosAPI = {
  getTodos,
  createTodo,
  toggleIsComplete,
};

export default todosAPI;
