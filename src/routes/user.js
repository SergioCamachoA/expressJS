import { Router } from "express"
import {
  getUsers,
  postUser,
  // getOneUser,
  putUser,
  deleteUser,
} from "../controllers/user.controller"
import { verifyToken } from "../lib/auth"
import {
  encryptPasswordUser,
  encryptPasswordUserUpdate,
  postValidation,
} from "../middlewares/api.user.middlewares"

const router = Router()

router
  .route("/")
  .get(verifyToken, getUsers)
  .post(postValidation, encryptPasswordUser, postUser)
  .put(encryptPasswordUserUpdate, putUser)
router.route("/:id").delete(verifyToken, deleteUser)
// .get(getOneUser)

export default router
