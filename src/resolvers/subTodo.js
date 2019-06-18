import { Todo, SubTodo } from "../models/";
import mongoose from "mongoose";

export default {
  Query: {
    subTodos: (root, args, context, info) => {
      return SubTodo.find({});
    }
  },

  Mutation: {
    removeSubTodo: (root, args, context, info) => {
      const { id } = args;
      const removeResult = SubTodo.findByIdAndDelete(id).exec();
      if (!removeResult) {
        throw new Error("Id does not exist in db");
      }
      return removeResult;
    },

    updateSubTodo: async (root, args, context, info) => {
      const { id, newTask } = args;
      const find = await SubTodo.findByIdAndUpdate(
        { _id: id },
        { task: newTask }
      );
      return find;
    }
  }
};
