import { Router } from "express"
import { getUsers } from "../../controllers/user.views.controller"

const router = Router()

router.route("/").get(getUsers)
// .post(postUser).put(putUser)
// router.route("/:id").get(getOneUser).delete(deleteUser)

export default router
