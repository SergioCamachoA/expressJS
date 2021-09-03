import { Router } from "express"
import { getUsers } from "../controllers/user"

const router = Router()

router.route("/").get(async (req, res) => {
  const users = await getUsers()

  res.render("pages/users", { nombre: "Sergio", users })
})
// .post(postUser).put(putUser)
// router.route("/:id").get(getOneUser).delete(deleteUser)

export default router
