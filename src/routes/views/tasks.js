import { Router } from "express"
import {
  getTasks,
  getUserTasks,
  putUserTasks,
} from "../../controllers/task.views.controller"

const router = Router()

router.route("/").get(getTasks)
// .post(postUser).put(putUser)
router.route("/user/:userid").get(getUserTasks).put(putUserTasks)
// router.route("/user/:userid").get(getUserTasks)
// .delete(deleteUser)

export default router
