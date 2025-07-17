import mongoose, { Schema } from "mongoose";
import { type } from "os";

const userSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["User", "Admin", "Seller"],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
  },
});

export const User = new mongoose.model("users", userSchema);
