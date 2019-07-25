import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    task: String,
    subTodos: [
      {
        type: Schema.Types.ObjectId,
        ref: "SubTodo",
        default: []
      }
    ],
    isComplete: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: String,
      default: new Date().toISOString()
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Todo", userSchema);
