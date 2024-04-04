import { useContext, createContext } from "react";

export const ToDoContext = createContext({
  todos: [],
});
export const useToDo = () => {
  return useContext(ToDoContext);
};
export const ToDoProvider = ToDoContext.Provider;
