import mongoose from 'mongoose';

export const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone:String,
  website: String,
  contact: String,
  number: String,
  another: String,
  notes: String,
  type: String,
  category: String,
  commission:Number,
  date: Date,
  logo: String,
  criticalAccount: { type: [String], default: [] },
  payment: String,
}
);
