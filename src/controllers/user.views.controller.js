import { Task } from "../models/Task"
import { User } from "../models/User"

export const getUsers = async (_, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "firstname", "lastname"],
    })
    // return users
    res.render("pages/users", { users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const getUser = async (req, res) => {
  const tasks = await Task.findAll({
    where: { userid: req.params.id },
  })

  const user = await User.findOne({
    attributes: ["id", "firstname", "lastname"],
    where: { id: req.params.id },
  })

  res.render("pages/user", { user, tasks })
}
