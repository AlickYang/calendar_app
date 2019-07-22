import { gql } from "apollo-server-express";
export default gql`
  extend type Query {
    getSubTodo(id: ID!): SubTodo!
    getSubTodos: [SubTodo]!
  }

  extend type Mutation {
    removeSubTodo(id: ID!): String!
    updateSubTodo(id: ID!, newTask: String!): SubTodo!
    toggleSubTodoComplete(id: ID!): SubTodo!
    toggleSubTodoHidden(id: ID!): SubTodo!
  }

  type SubTodo {
    id: ID!
    task: String!
    createdAt: String!
    todo: Todo!
    isComplete: Boolean
    hidden: Boolean
  }
`;
