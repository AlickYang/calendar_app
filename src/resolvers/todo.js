import { Todo, SubTodo } from "../models/";
import mongoose from "mongoose";
import { UserInputError } from "apollo-server-express";

export default {
  Todo: {
    subTodos: async (todo, args, context, info) => {
      const ret = (await todo.populate("subTodos").execPopulate()).subTodos;
      return ret;
    }
  },
  Query: {
    getTodos: async (root, args, context, info) => {
      try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        if (todos) {
          return todos;
        } else {
          throw new Error("Todo not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    getTodo: async (root, { id }, context, info) => {
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
    addTodo: async (root, { task }, context, info) => {
      const todo = new Todo({
        task,
        createdAt: new Date().toISOString()
      });
      console.log(todo);
      const resultOfSave = await todo.save();
      if (resultOfSave) {
        return todo;
      } else {
        throw new Error("Could not be saved");
      }
    },
    removeTodo: async (root, { id }, context, info) => {
      try {
        const removeResult = await Todo.findByIdAndDelete(id);
        if (!removeResult) {
          throw new Error(
            "Todo does not exist (trying to remove invalid todo)"
          );
        }
        return "Todo successfully deleted";
      } catch (err) {
        throw new Error(err);
      }
    },

    addSubTodo: async (root, { id, task }, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error();
      }
      if (task.trim() === "") {
        throw UserInputError("Empty task", {
          errors: {
            body: "Todo body must not be empty"
          }
        });
      }
      const subTodo = await SubTodo.create({ task });
      const todoUpdate = Todo.findById(id);
      await todoUpdate
        .findOneAndUpdate({ _id: id }, { $push: { subTodos: subTodo } })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      return subTodo;
    },

    updateTodoTask: async (root, { id, newTask }, context, info) => {
      // const find = await Todo.findByIdAndUpdate({ _id: id }, { task: newTask });
      const todo = await Todo.findById(id);
      if (todo) {
        todo.task = newTask;
        await todo.save();
        return todo;
      } else {
        throw new Error("Todo not found");
      }
    },

    toggleTodoHidden: async (root, { id }, context, info) => {
      const todo = await Todo.findById(id);
      if (todo) {
        todo.hidden = !todo.hidden;
        await todo.save();
        return todo;
      } else {
        throw new Error("Todo not found");
      }
    },

    toggleTodoComplete: async (root, { id }, context, info) => {
      const todo = await Todo.findById(id);
      if (todo) {
        todo.isComplete = !todo.isComplete;
        await todo.save();
        return todo;
      } else {
        throw new Error("Todo not found");
      }
    }
  }
};
