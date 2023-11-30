import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("user", userSchema);
