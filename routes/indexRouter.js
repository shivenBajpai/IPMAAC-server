import { Router } from "express"
import { loginRouter } from "./login.get.post.js"
import { genfaRouter } from "./genfa.get.js"
import { messageApiEndpoint } from "./send.post.js"

const indexRouter = new Router()

indexRouter.get('/',(req,res) => {
  res.redirect('/login')
})

indexRouter.use(loginRouter)
indexRouter.use(genfaRouter)
indexRouter.use(messageApiEndpoint)

export default indexRouter
