/* eslint-disable react/prop-types */
import { useState } from "react";

const ToDoItem = ({ todoItem, setTodos }) => {
  const [updatedToDo, setUpdatedToDo] = useState(todoItem?.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const editTodo = (id) => {
    setTodos((prev) =>
      prev?.map((prevTodo) =>
        prevTodo?.id === id ? { ...prevTodo, todo: updatedToDo } : prevTodo
      )
    );
    setIsTodoEditable(false);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev?.filter((prevTodo) => prevTodo?.id !== id));
  };

  return (
    <div className="flex flex-wrap gap-y-3 py-2">
      <div
        className={`flex w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7]
        `}
      >
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } `}
          value={updatedToDo}
          onChange={(e) => setUpdatedToDo(e.target.value)}
          readOnly={!isTodoEditable}
        />

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            isTodoEditable
              ? editTodo(todoItem?.id)
              : setIsTodoEditable((prev) => !prev);
          }}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodo(todoItem?.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
