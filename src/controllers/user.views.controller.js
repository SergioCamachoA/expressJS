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
