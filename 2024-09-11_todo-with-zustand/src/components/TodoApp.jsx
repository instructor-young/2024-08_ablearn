import TodoHeader from "./TodoHeader";
import TodoRoutes from "./TodoRoutes";

function TodoApp() {
  return (
    <main className="border border-black w-[300px] h-[400px]">
      <TodoHeader />
      <TodoRoutes />
    </main>
  );
}

export default TodoApp;
