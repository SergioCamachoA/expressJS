import { Router } from "express"
import { getUser, getUsers } from "../../controllers/user.views.controller"

const router = Router()

router.route("/").get(getUsers)
// .post(postUser).put(putUser)
router.route("/:id").get(getUser)
// .delete(deleteUser)

export default router
