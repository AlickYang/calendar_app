import mongoose, { Schema } from "mongoose";
const { ObjectId } = Schema.Types;

const subTodoSchema = new Schema(
  {
    task: String,
    todo: {
      type: ObjectId,
      ref: "Todo"
    },
    // isComplete: Boolean,
    // hidden: Boolean
    isComplete: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("SubTodo", subTodoSchema);
