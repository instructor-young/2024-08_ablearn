import useTodoStore from "../zustand/stores/todo.store";

function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodoIsComplete = useTodoStore(
    (state) => state.toggleTodoIsComplete
  );
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <ul className="py-2.5 grid grid-cols-1 gap-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="px-4 flex justify-between">
          <button onClick={() => toggleTodoIsComplete(todo.id)}>
            [ {todo.isComplete ? "o" : "x"} ] {todo.content}
          </button>

          <div className="flex gap-x-3">
            <button className="border">수정</button>
            <button onClick={() => deleteTodo(todo.id)} className="border">
              삭제
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
