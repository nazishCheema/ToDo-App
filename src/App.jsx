import { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import { ToDoProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosList = JSON.parse(localStorage.getItem(`todosList`));
    if (todosList && todosList?.length > 0) setTodos(todosList);
  }, []);

  useEffect(() => {
    localStorage.setItem(`todosList`, JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider value={{ todos: todos, setTodos: setTodos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
