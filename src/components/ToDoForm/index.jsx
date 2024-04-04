import { useState } from "react";
import { useToDo } from "../../context";
import ToDoItem from "../ToDoitem";
const ToDoForm = () => {
  const { setTodos } = useToDo();

  const [todoMsg, setToDoMsg] = useState(``);

  const handleAddTodo = () => {
    setTodos((prev) => [
      {
        id: Date.now(),
        todo: todoMsg,
      },
      ...prev,
    ]);
  };

  return (
    <>
      <form className="flex" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todoMsg}
          onChange={(e) => setToDoMsg(e?.target?.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
      <ToDoItem />
    </>
  );
};

export default ToDoForm;
