import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    task: String,
    subTodos: [
      {
        type: Schema.Types.ObjectId,
        ref: "SubTodo"
      }
    ],
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

export default mongoose.model("Todo", userSchema);
