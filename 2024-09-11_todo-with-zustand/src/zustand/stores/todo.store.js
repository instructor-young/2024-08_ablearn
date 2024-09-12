import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      createTodo: (content) =>
        set((state) => ({
          todos: [
            { id: Date.now(), content, isComplete: false },
            ...state.todos,
          ],
        })),
      updateTodoContent: ({ id, content }) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, content } : todo
          ),
        })),
      toggleTodoIsComplete: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: "todo-store",
    }
  )
);

export default useTodoStore;
