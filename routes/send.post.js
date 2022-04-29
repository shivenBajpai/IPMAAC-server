import { Router } from "express"
import bodyParser from "body-parser"
import tiny from "tiny-json-http"
import { Channel } from "../model/Channels.js"
import { Person } from "../model/Persons.js"

const messageApiEndpoint = new Router()
var jsonParser = bodyParser.json()

// This route recieves the requests for actually sending the messages to the webhooks
messageApiEndpoint.post("/send", jsonParser, async (req, res) => {

  let channel = await Channel.find({ id: req.body.channel })
  let person = await Person.findById(req.body.person)

  // Construct JSON Payload
  let params = {
    content: req.body.message,
    username: person.name,
    avatar_url: person.avatar,
  }

  // Send message to discord webhook
  tiny.post({ url: channel[0].url, data: params }, (err, res_b) => {
    if (err) throw err
  })
})

export { messageApiEndpoint }
