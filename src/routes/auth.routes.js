import { Router } from "express"
import { login, signup } from "../controllers/auth.controller"
import {
  encryptPasswordUser,
  postValidation,
} from "../middlewares/api.user.middlewares"

const router = Router()

// router.post("/signup", signup)
router.post("/signup", postValidation, encryptPasswordUser, signup)

router.post("/login", login)
export default router
