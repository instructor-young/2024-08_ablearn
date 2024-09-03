import { nanoid } from "nanoid";
import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChangeInput = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleClickAddTodo = () => {
    const newTodo = {
      id: nanoid(),
      content: inputValue,
      isCompleted: false,
    };
    const newTodoList = [newTodo, ...todoList];

    setTodoList(newTodoList);
    setInputValue("");
  };

  const handleClickDelete = (todoId) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);

    setTodoList(newTodoList);
  };

  const handleClickToggleIsCompleted = (todoId) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setTodoList(newTodoList);
  };

  const handleClickEdit = (todoId, inputValue) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === todoId ? { ...todo, content: inputValue } : todo
    );

    setTodoList(newTodoList);
  };

  return (
    <main>
      <div>
        <h2>할 일 추가하기</h2>
        <input value={inputValue} onChange={handleChangeInput} type="text" />
        <button onClick={handleClickAddTodo}>추가</button>
      </div>

      <hr />

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              handleClickDelete={handleClickDelete}
              handleClickToggleIsCompleted={handleClickToggleIsCompleted}
              handleClickEdit={handleClickEdit}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
