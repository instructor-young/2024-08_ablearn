import TodoApp from "@/components/TodoApp";
import TodoHeader from "@/components/TodoApp/components/TodoHeader";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="root"
      className="min-h-screen grid grid-cols-1 place-items-center bg-gray-100 p-5"
    >
      <TodoApp>
        <TodoHeader />
        <main>{children}</main>
      </TodoApp>
    </div>
  );
}

export default RootLayout;
