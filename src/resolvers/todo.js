import { Todo, SubTodo } from "../models/";
import mongoose from "mongoose";

export default {
  Query: {
    todos: (root, args, context, info) => {
      return Todo.find({});
    },
    todo: (root, { id }, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error();
      }
      return Todo.findById(id);
    }
  },

  Mutation: {
    addTodo: (root, args, context, info) => {
      return Todo.create(args);
    },
    removeTodo: (root, { id }, context, info) => {
      const removeResult = Todo.findByIdAndDelete(id).exec();
      if (!removeResult) {
        throw new Error("Id does not exist in db");
      }
      return removeResult;
    },

    addSubTodo: async (root, args, context, info) => {
      const { id, task } = args;
      const subTodo = await SubTodo.create({ task });
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error();
      }
      const todoUpdate = Todo.findById(id);
      console.log("id is " + id);
      await todoUpdate
        .findOneAndUpdate({ _id: id }, { $push: { subTodos: subTodo } })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      return subTodo;
    },

    updateTodo: async (root, args, context, info) => {
      const { id, newTask } = args;
      const find = await Todo.findByIdAndUpdate({ _id: id }, { task: newTask });
      return find;
    },

    toggleHidden: async (root, args, context, info) => {
      //TODO
      // const { id, newTask } = args;
      // const find = await Todo.findByIdAndUpdate({ _id: id }, { task: newTask });
    },

    toggleComplete: async (root, args, context, info) => {
      //TODO
    }
  },

  Todo: {
    subTodos: async (todo, args, context, info) => {
      const ret = (await todo.populate("subTodos").execPopulate()).subTodos;
      console.log(ret);
      return ret;
    }
  }
};
