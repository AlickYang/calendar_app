import { gql } from "apollo-server-express";
export default gql`
  extend type Query {
    todo(id: ID!): Todo
    todos: [Todo!]
  }

  extend type Mutation {
    addTodo(task: String!): Todo
    removeTodo(id: ID!): Todo
    addSubTodo(id: ID!, task: String!): SubTodo
    updateTodo(id: ID!, newTask: String!): Todo
    toggleHidden(id: ID!): Todo
    toggleComplete(id: ID!): Todo
  }

  type Todo {
    id: ID!
    task: String!
    subTodos: [SubTodo!]
    createdAt: String!
    isComplete: Boolean
    hidden: Boolean
  }
`;
