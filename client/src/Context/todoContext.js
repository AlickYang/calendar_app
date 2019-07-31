import React, { useReducer, createContext } from "react";

const TodoContext = createContext({
  id: null,
  body: null
});

export const TodoProvider = () => {
  return <TodoContext.Provider />;
};
