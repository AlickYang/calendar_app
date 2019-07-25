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
      if (task.trim === "") {
        throw new Error("Body must not be empty");
      }
      const newTodo = new Todo({
        task,
        isComplete: false,
        createdAt: new Date().toISOString(),
        subTodos: []
      });
      console.log("Trying to make a new todo");
      console.log(newTodo);
      const todo = await newTodo.save();
      console.log(todo);
      return todo;
    },

    removeTodo: async (root, { id }, context, info) => {
      console.log("In removeTodo");
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid todo id");
      }
      try {
        console.log("Trying to find the todo");
        const todo = await Todo.findById(id);
        await todo.delete();
        console.log("Removal successful");
        return "Todo successfully deleted";
      } catch (err) {
        console.log("It just failed");
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
