import { Router } from "express"
import {
  deleteTask,
  getOneTasks,
  getTasks,
  postTask,
  putTask,
} from "../controllers/task.controller"

const router = Router()

router.route("/").get(getTasks).post(postTask).put(putTask)
router.route("/:id").get(getOneTasks).delete(deleteTask)

export default router
