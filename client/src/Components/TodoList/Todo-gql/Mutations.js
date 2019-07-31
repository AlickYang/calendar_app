import gql from "graphql-tag";

export const MUTATION_ADD_TODO = gql`
  mutation addTodo($task: String!) {
    addTodo(task: $task) {
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

<<<<<<< HEAD
export const MUTATION_EDIT_TODO = gql`
  mutation updateTodoTask($id: ID!, $newTask: String!) {
    updateTodoTask(id: $id, newTask: $newTask) {
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

=======
>>>>>>> f4290b3e2fc8f65cdd113663cca8168ec0fe10ea
export const MUTATION_REMOVE_TODO = gql`
  mutation removeTodo($id: ID!) {
    removeTodo(id: $id)
  }
`;
