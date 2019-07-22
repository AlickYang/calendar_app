import todo from "./todo";
import subTodo from "./subTodo";

// const resolvers = {
//   //   Todo: {
//   //     numSubTodos: parent => {
//   //       parent.subTodos.length;
//   //     }
//   //   },
//   Query: {
//     ...todo.Query,
//     ...subTodo.Query
//   },
//   Mutation: {
//     ...todo.Mutation,
//     ...subTodo.Mutation
//   }
// };

// export default resolvers;
export default [todo, subTodo];

// module.exports = {
//     Post: {
//       likeCount: parent => parent.likes.length,
//       commentCount: parent => parent.comment.length
//     },
//     Query: {
//       ...postsResolvers.Query,
//       ...usersResolvers.Query
//     },
//     Mutation: {
//       ...usersResolvers.Mutation,
//       ...postsResolvers.Mutation,
//       ...commentsResolvers.Mutation
//     }
//   };
