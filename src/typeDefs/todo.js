import { gql } from "apollo-server-express";
export default gql`
  extend type Query {
    getTodo(id: ID!): Todo!
    getTodos: [Todo]!
  }

  extend type Mutation {
    addTodo(task: String!): Todo!
    removeTodo(id: ID!): String!
    addSubTodo(id: ID!, task: String!): SubTodo!
    updateTodoTask(id: ID!, newTask: String!): Todo!
    toggleTodoHidden(id: ID!): Todo!
    toggleTodoComplete(id: ID!): Todo!
  }

  type Todo {
    id: ID!
    task: String!
    subTodos: [SubTodo!]
    numSubTodos: Int
    createdAt: String!
    isComplete: Boolean!
    hidden: Boolean!
  }
`;
