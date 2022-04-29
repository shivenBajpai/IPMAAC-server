import "dotenv/config"
import express from "express"
import indexRouter from "./routes/indexRouter.js"
import mongoose from "mongoose"

const app = express()
mongoose.connect(
  `mongodb+srv://Server:${process.env.PASSWORD}@main.80zej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  (e) => {
    console.log(`connected to database at ${mongoose.connection.host}`)
  },
)

// set the view engine to ejs
app.set("view engine", "ejs")

// set up static files
app.use(express.static("public"))

// set up routing
app.use(indexRouter)

// listen for requests
app.listen(process.env.PORT || 4040)
console.log(`Listening on port ${process.env.PORT || 4040}`)
