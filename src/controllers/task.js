import { Task } from "../models/Task"

export const getTasks = async (_, res) => {
  try {
    const allTasks = await Task.findAll({})
    // console.log(allTasks)
    res.status(200).json(allTasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const getOneTasks = async (req, res) => {
  const { id } = req.params
  try {
    const oneTask = await Task.findOne({ where: { id } })
    if (!oneTask) res.status(400).json({ response: "task not found" })

    res.status(200).json(oneTask)
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const postTask = async (req, res) => {
  const { name, description, done, deliverydate, userid } = req.body
  try {
    const newTask = await Task.create(
      {
        name,
        description,
        done,
        deliverydate,
        userid,
      },
      {
        fields: ["name", "description", "done", "deliverydate", "userid"],
      }
    )
    res.status(200).json(newTask)
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const putTask = async (req, res) => {
  const id = req.body.id
  const type = req.body.type
  const newValue = req.body.newValue
  try {
    const modifiedResponse = await Task.update(
      { [type]: newValue },
      {
        where: { id },
      }
    )
    res.status(200).json({ how_many_updated_tasks: modifiedResponse })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const deleteTask = async (req, res) => {
  const { id } = req.params
  try {
    const deleteResponse = await Task.destroy({ where: { id } })
    res.status(200).json({ how_many_deleted_tasks: deleteResponse })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}
