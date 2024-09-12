import useRouterStore from "../zustand/stores/router.store";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

function TodoRoutes() {
  const currentLocation = useRouterStore((state) => state.currentLocation);

  return (
    <>
      {currentLocation === "list" && <TodoList />}
      {currentLocation === "new" && <TodoCreate />}
    </>
  );
}

export default TodoRoutes;
