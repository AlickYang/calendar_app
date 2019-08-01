import React, { Fragment } from "react";
//GraphQL
import { useQuery } from "@apollo/react-hooks";

import TodoItem from "./TodoItem";
import Loading from "./../Common/Loading";
import { QUERY_GET_TODOS } from "./Todo-gql/Queries";

export default function Todos() {
  // const classes = TodoListTheme;
  const {
    loading,
    data: { getTodos: todos }
  } = useQuery(QUERY_GET_TODOS);
  console.log(todos);
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              task={todo.task}
              subTodos={todo.subTodos}
              isComplete={todo.isComplete}
              createdAt={todo.createdAt}
            />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
}
