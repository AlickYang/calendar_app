import gql from "graphql-tag";

export const QUERY_GET_TODOS = gql`
  {
    getTodos {
      id
      task
      isComplete
      createdAt
      subTodos {
        id
        task
        isComplete
        createdAt
      }
    }
  }
`;

export const QUERY_GET_TODO = gql`
  query getTodo($id: String) {
    getTodo(id: $id) {
      task
      isComplete
      createdAt
    }
  }
`;

export const QUERY_GET_SUBTODOS = gql`
  query {
    getSubTodos {
      id
      task
      isComplete
      createdAt
    }
  }
`;
