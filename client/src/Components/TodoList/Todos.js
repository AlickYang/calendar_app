import React, { Fragment } from "react";
//GraphQL
import { Query } from "react-apollo";
import gql from "graphql-tag";

import TodoItem from "./TodoItem";
import Loading from "./../Common/Loading";

/* Material UI */
//List related
import List from "@material-ui/core/List";

const GET_TODOS = gql`
  query {
    todos {
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
  return (
    <List>
      <Query query={GET_TODOS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) return `Error! ${error.message}`;
          return (
            <Fragment>
              {data.todos.map(todo => (
                <TodoItem
                  todo={todo.task}
                  key={todo.id}
                  subTodos={todo.subTodos}
                  isComplete={todo.isComplete}
                />
              ))}
            </Fragment>
          );
        }}
      </Query>
    </List>
  );
}
