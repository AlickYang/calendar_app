import React, { Fragment } from "react";
//GraphQL
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import TodoItem from "./TodoItem";
import Loading from "./../Common/Loading";
import {
  GET_TODOS_QUERY,
  GET_SUBTODOS_QUERY,
  GET_TODO_QUERY
} from "./Todo-gql/Queries";

export default function Todos() {
  // const classes = TodoListTheme;
  const {
    loading,
    data: { getTodos: todos }
  } = useQuery(GET_TODOS_QUERY);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo.task}
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
