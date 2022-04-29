import { Router } from "express"
import bodyParser from "body-parser"
import { User } from "../model/Users.js"

const loginRouter = new Router()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// page requests
loginRouter.get("/login", (req, res) => {
  res.render("login", { error: "" })
})

// actual login requests
loginRouter.post("/login", urlencodedParser, async (req, res) => {

  // Checking for account with matching password
  let result = await User.findOne({ password: req.body.pass })

  if (result) {

    // Redirecting as per authority level
    if (result.auth === 1) res.redirect("/genla")
    else res.redirect("/genfa")

  } else {
    res.render("login", {
      error: "Unauthorized Passcode, sending you to jesus immediately.",
    })
  }
})

export { loginRouter }
