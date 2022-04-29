import "dotenv/config"
import mongoose from "mongoose"
import { User } from "../model/Users.js"

mongoose.connect(process.env.DATABASE_URL, async (e) => {
  console.log(`connected to database at ${mongoose.connection.host}`)

  if (
    (await User.deleteOne({ name: "admin", password: "admin", auth: 4 }))
      .deletedCount === 1
  ) {
    console.log("Successfully removed default admin account!")
  } else {
    console.log("Failed to delete default admin account! Has it already been removed?")
  }

  process.exit(0)
})
