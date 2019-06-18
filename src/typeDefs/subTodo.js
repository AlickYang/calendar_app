import { gql } from "apollo-server-express";
export default gql`
  extend type Query {
    subTodos: [SubTodo!]
  }

  extend type Mutation {
    removeSubTodo(id: ID!): SubTodo
    updateSubTodo(id: ID!, newTask: String!): SubTodo
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
