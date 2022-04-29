import "dotenv/config"
import mongoose from "mongoose"
import { User } from "../model/Users.js"

mongoose.connect(
  process.env.DATABASE_URL,
  async (e) => {
    console.log(`connected to database at ${mongoose.connection.host}`)

    let x = new User({name: 'admin', password:'admin', auth:4})

    await x.save()

    console.log("done!")
    process.exit(0);
  },
)