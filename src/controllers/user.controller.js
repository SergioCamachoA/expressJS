// import db from "../dadabase/postgres.db"
import { User } from "../models/User"

export const getUsers = async (_, res) => {
  try {
    const allUsers = await User.findAll({
      attributes: ["id", "firstname", "lastname"],
    })
    // res.set("Access-Control-Allow-Origin", "*")

    res.status(200).json(allUsers)
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const getOneUser = async (req, res) => {
  const { id } = req.params
  try {
    const oneUser = await User.findOne({ where: { id } })

    if (oneUser === null) {
      return res.status(400).json({ response: "user not found" })
    }
    res.status(200).json(oneUser)
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const postUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body
  try {
    const newUser = await User.create(
      {
        firstname,
        lastname,
        email,
        password,
      },
      {
        fields: ["firstname", "lastname", "email", "password"],
      }
    )
    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const putUser = async (req, res) => {
  const id = req.body.id
  const type = req.body.type
  const newValue = req.body.newValue
  try {
    const modifiedResponse = await User.update(
      { [type]: newValue },
      {
        where: { id },
      }
    )
    res.status(200).json({
      how_many_updated_users: modifiedResponse,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const deleteResponse = await User.destroy({ where: { id } })
    res.status(200).json({ how_many_deleted_users: deleteResponse })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}
