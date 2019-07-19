import { Todo, SubTodo } from "../models/";
import mongoose from "mongoose";

export default {
  Query: {
    todos: async (root, args, context, info) => {
      try {
        const todos = await Todo.find();
        if (todos) {
          return todos;
        } else {
          throw new Error("Todo not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    todo: async (root, { id }, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error();
      }
      try {
        const todo = await Todo.findById(id);
        if (todo) {
          return todo;
        } else {
          throw new Error("Todo not found");
        }
      } catch (err) {
        throw new Error(err);
      }
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

    updateTodoTask: async (root, args, context, info) => {
      const { id, newTask } = args;
      const find = await Todo.findByIdAndUpdate({ _id: id }, { task: newTask });
      return find;
    },

    toggleTodoHidden: async (root, args, context, info) => {
      //TODO
      // const { id, newTask } = args;
      // const find = await Todo.findByIdAndUpdate({ _id: id }, { task: newTask });
    },

    toggleTodoComplete: async (root, args, context, info) => {
      //TODO
      const { id, isComplete } = args;
      const toggle = !isComplete;
      const find = await Todo.findByIdAndUpdate(
        { _id: id },
        { isComplete: toggle }
      );
      return find;
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
