import { Todo, SubTodo } from "../models/";
import mongoose from "mongoose";

export default {
  Query: {
    getSubTodos: async (root, args, context, info) => {
      try {
        const subTodos = await SubTodo.find().sort({ createdAt: -1 });
        if (subTodos) {
          return subTodos;
        } else {
          throw new Error("Todo not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    getSubTodo: async (_, { id }, context, info) => {
      try {
        const subTodo = await SubTodo.findById(id);
        if (subTodo) {
          return subTodo;
        } else {
          throw new Error("SubTodo not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    removeSubTodo: async (root, { id }, context, info) => {
      try {
        const removeResult = await SubTodo.findByIdAndDelete(id).exec();
        if (!removeResult) {
          throw new Error("Id does not exist in db");
        }
        return "SubTodo removed successfully";
      } catch {
        throw new Error("Removal of subTodo failed");
      }
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
