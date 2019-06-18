import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_TODOS = gql`
  query {
    todos {
      id
      task
    }
  }
`;

export default class Todos extends Component {
  render() {
    return (
      <Fragment>
        <Query query={GET_TODOS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
              <Fragment>
                {data.todos.map(todo => (
                  <div>{todo.task}</div>
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
