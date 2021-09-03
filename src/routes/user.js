import { Router } from "express"
import {
  getUsers,
  postUser,
  getOneUser,
  putUser,
  deleteUser,
} from "../controllers/user"

const router = Router()

router.route("/").get(getUsers).post(postUser).put(putUser)
router.route("/:id").get(getOneUser).delete(deleteUser)

export default router
