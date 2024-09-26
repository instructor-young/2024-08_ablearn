import React from "react";

function TodoApp({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="app"
      className="bg-white w-full max-w-sm aspect-[9/16] shadow-default rounded-xl"
    >
      {children}
    </div>
  );
}

export default TodoApp;
