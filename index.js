import "./src";
// const { ApolloServer, gql } = require("apollo-server");
// const crypto = require("crypto");

// const db = {
//   todos: [
//     { id: "1", task: "Item1", complete: false, date: Date.now() },
//     {
//       id: "2",
//       task: "Item2",
//       complete: false,
//       date: Date.now()
//     },
//     {
//       id: "3",
//       task: "Item3",
//       complete: true,
//       date: Date.now()
//     }
//   ],
//   sub_todos: [
//     { id: "2a", task_id: "2", task: "Item2-1", complete: false },
//     { id: "2b", task_id: "2", task: "Item2-2", complete: false },
//     { id: "3a", task_id: "3", task: "Item3-1", complete: true }
//   ]
// };

// const typeDefs = gql`
//   type Query {
//     todos: [Todo!]!
//     todo(id: ID!): Todo
//     sub_todos: [Sub_Todo!]!
//   }

//   type Mutation {
//     addTodo(task: String!): Todo
//   }

//   type Todo {
//     id: ID!
//     task: String
//     complete: Boolean
//     date: String
//     subTasks: [Sub_Todo]
//   }

//   type Sub_Todo {
//     id: ID!
//     task_id: String!
//     task: String
//     complete: Boolean
//   }
// `;

// const resolvers = {
//   Query: {
//     todos: () => db.todos,
//     todo: (root, { id }) => db.todos.find(todo => todo.id === id),
//     sub_todos: () => db.sub_todos
//   },

//   Mutation: {
//     addTodo: (root, { task }) => {
//       const todo = {
//         id: crypto.randomBytes(10).toString("hex"),
//         task: task,
//         complete: false
//       };

//       db.todos.push(todo);
//       return todo;
//     }
//   },

//   Todo: {
//     subTasks: todo =>
//       db.sub_todos.filter(sub_todo => sub_todo.task_id === todo.id)
//   }
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen(4001).then(({ url }) => console.log(url));
