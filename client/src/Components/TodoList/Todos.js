import React, { Fragment } from "react";
//GraphQL
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import TodoItem from "./TodoItem";
import Loading from "./../Common/Loading";
import { QUERY_GET_TODOS } from "./Todo-gql/Queries";

<<<<<<< HEAD
import TodoProvider from "./../../Context/todoContext";

=======
>>>>>>> f4290b3e2fc8f65cdd113663cca8168ec0fe10ea
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
<<<<<<< HEAD
              task={todo.task}
=======
              todo={todo.task}
>>>>>>> f4290b3e2fc8f65cdd113663cca8168ec0fe10ea
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
