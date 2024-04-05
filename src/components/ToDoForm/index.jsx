import { useEffect, useState } from "react";
import ToDoItem from "../ToDoitem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ToDoForm = () => {
  const [todos, setTodos] = useState([]);
  const [todoMsg, setToDoMsg] = useState("");

  const handleAddTodo = () => {
    if (todoMsg.trim() !== "") {
      setTodos((prev) => [
        {
          id: Date.now(),
          todo: todoMsg,
        },
        ...prev,
      ]);
      setToDoMsg("");
    }
  };

  useEffect(() => {
    const todosList = JSON.parse(localStorage.getItem("todosList"));
    if (todosList && todosList.length > 0) setTodos(todosList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  const handleEndDrag = (result) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
  };

  return (
    <>
      <form className="flex" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todoMsg}
          onChange={(e) => setToDoMsg(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
      <DragDropContext onDragEnd={handleEndDrag}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id.toString()}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ToDoItem
                        key={todo.id}
                        todoItem={todo}
                        setTodos={setTodos}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ToDoForm;
