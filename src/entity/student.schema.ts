import mongoose from "mongoose";

export const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  initial: String,
});
