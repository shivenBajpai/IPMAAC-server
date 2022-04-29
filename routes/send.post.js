import { Router } from "express"
import bodyParser from "body-parser"
import tiny from "tiny-json-http"
import { Channel } from "../model/Channels.js"
import { Person } from "../model/Persons.js"

const messageApiEndpoint = new Router()
var jsonParser = bodyParser.json()

messageApiEndpoint.post("/send", jsonParser, async (req, res) => {
  console.log(req.body)

  let channel = await Channel.find({ id: req.body.channel })
  let person = await Person.findById(req.body.person)

  let params = {
    content: req.body.message,
    username: person.name,
    avatar_url: person.avatar,
  }

  console.log(params)
  console.log(channel)
  console.log(person)

  tiny.post({ url: channel[0].url, data: params }, (err, res_b) => {
    if (err) throw err
    else console.log("great success")
  })
})

export { messageApiEndpoint }
