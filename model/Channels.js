import mongoose from "mongoose";
const ObjectId = mongoose.Schema.ObjectId

const Channel = mongoose.model('Channel', new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}))

export { Channel }