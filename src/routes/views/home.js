import { Router } from "express"
import { getHome } from "../../controllers/home.views.controller"

const router = Router()

router.route("/").get(getHome)

export default router
