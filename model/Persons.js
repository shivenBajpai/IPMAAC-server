import mongoose from "mongoose";
const ObjectId = mongoose.Schema.ObjectId

const Person = mongoose.model('Person', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
}))

export { Person }