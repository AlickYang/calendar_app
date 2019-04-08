import { gql } from "apollo-server-express";
export default gql`
  extend type Query {
    todo(id: ID!): Todo
    todos: [Todo!]
  }

  extend type Mutation {
    addTodo(task: String!): Todo
  }

  type Todo {
    id: ID!
    task: String!
    createdAt: String!
    isComplete: Boolean
  }
`;
