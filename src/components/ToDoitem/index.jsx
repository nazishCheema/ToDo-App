import { useState } from "react";
import { useToDo } from "../../context";

const ToDoItem = () => {
  const { todos, setTodos } = useToDo();
  // const [updatedToDo, setUpdatedToDo] = useState(``);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  // const editTodo = (todo, id) => {
  //   console.log(id, todo);
  //   setTodos((prev) =>
  //     prev?.map((prevTodo) =>
  //       prevTodo?.id === id ? { ...todo, todo: updatedToDo } : prevTodo
  //     )
  //   );
  // };
  const deleteTodo = (id) => {
    setTodos((prev) => prev?.filter((prevTodo) => prevTodo?.id !== id));
  };
  return (
    <div className="flex flex-wrap gap-y-3 py-4 ">
      {todos &&
        todos?.map((toDo) => (
          <div
            key={toDo?.id}
            className={`flex w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7]
        `}
          >
            <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } `}
              value={toDo?.todo}
              // onChange={(e) => setUpdatedToDo(e.target.value)}
              readOnly={!isTodoEditable}
            />
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                if (isTodoEditable) {
                  // editTodo(toDo, toDo?.id);
                } else setIsTodoEditable((prev) => !prev);
              }}
            >
              {isTodoEditable ? "📁" : "✏️"}
            </button>

            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(toDo?.id)}
            >
              ❌
            </button>
          </div>
        ))}
    </div>
  );
};

export default ToDoItem;
