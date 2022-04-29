import { Router } from "express"
import bodyParser from "body-parser"
import { User } from "../model/Users.js"

const loginRouter = new Router()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

loginRouter.get("/login", (req, res) => {
  res.render("login", { error: "" })
})

loginRouter.post("/login", urlencodedParser, async (req, res) => {

  let result = await User.findOne({ password: req.body.pass })

  if (result) {
    if (result.auth === 1) res.redirect("/genla")
    else res.redirect("/genfa")

  } else {
    res.render("login", {
      error: "Unauthorized Passcode, sending you to jesus immediately.",
    })
  }
})

export { loginRouter }
