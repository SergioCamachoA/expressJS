import { Router } from "express"
import { getUserTasks } from "../../controllers/task.views.controller"

const router = Router()

router.route("/").get(getUserTasks)
// .post(postUser).put(putUser)
// router.route("/user").get(getUserTasks)
// router.route("/user/:userid").get(getUserTasks)
// .delete(deleteUser)

export default router
