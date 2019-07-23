import gql from "graphql-tag";

export const GET_TODOS_QUERY = gql`
  query {
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

export const GET_TODO_QUERY = gql`
  query getTodo($id: String) {
    getTodo(id: $id) {
      task
      isComplete
      createdAt
    }
  }
`;

export const GET_SUBTODOS_QUERY = gql`
  query {
    getSubTodos {
      id
      task
      isComplete
      createdAt
    }
  }
`;
