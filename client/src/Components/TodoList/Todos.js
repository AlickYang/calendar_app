import React, { Fragment } from "react";
//GraphQL
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import TodoItem from "./TodoItem";
import Loading from "./../Common/Loading";

const GET_TODOS_QUERY = gql`
  query {
    getTodos {
      id
      task
      isComplete
      subTodos {
        id
        task
      }
    }
  }
`;

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
            />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
}
