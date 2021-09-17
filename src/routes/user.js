import { Router } from "express"
import {
  getUsers,
  postUser,
  getOneUser,
  putUser,
  deleteUser,
} from "../controllers/user.controller"
import {
  encryptPasswordUser,
  encryptPasswordUserUpdate,
  postValidation,
} from "../middlewares/api.user.middlewares"

const router = Router()

router
  .route("/")
  .get(getUsers)
  .post(postValidation, encryptPasswordUser, postUser)
  .put(encryptPasswordUserUpdate, putUser)
router.route("/:id").get(getOneUser).delete(deleteUser)

export default router
