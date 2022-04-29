import { Router } from "express"
import { Channel } from "../model/Channels.js"
import { Person } from "../model/Persons.js"
const genfaRouter = new Router()

genfaRouter.get("/genfa", async (req, res) => {
  
  // Get list of available channels and persons to include in list
  let channels = await Channel.find({})
  let persons = await Person.find({})

  res.render("genfa", { channels, persons })
})

export { genfaRouter }
