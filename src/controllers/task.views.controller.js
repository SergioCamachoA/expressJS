import sequelize from "../dadabase/postgres.db"
import { Task } from "../models/Task"

export const getTasks = async (_, res) => {
  try {
    const tasks = await Task.findAll({
      attributes: ["userid", [sequelize.fn("COUNT", "userid"), "id"]],
      group: ["userid"],
      order: [["userid", "ASC"]],
    })
    // console.log(tasks)
    res.render("pages/tasks", { tasks })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error, my amigo" })
  }
}

export const getUserTasks = async (req, res) => {
  try {
    // console.log(req.params)
    const { userid } = req.params
    const tasks = await Task.findAll({
      attributes: ["name", "description", "done", "deliverydate"],
      where: { userid },
    })
    res.render("pages/tasks_user", { tasks })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error, my amigo" })
  }
}

export const putUserTasks = async (req, res) => {
  const newValue = req.body.newValue
  const id = req.body.id
  try {
    const tasks = await Task.update(
      {
        done: newValue,
      },
      {
        where: { id },
      }
    )
    res.status(200).json({ response: "status updated" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error, my amigo" })
  }
}
