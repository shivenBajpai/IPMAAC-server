import mongoose from "mongoose";
const ObjectId = mongoose.Schema.ObjectId

const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  auth: {
    type: Number,
    min: 1,
    max: 4,
    required: true
  },
  channels: [ObjectId],
  persons: [ObjectId]
}))

export { User }