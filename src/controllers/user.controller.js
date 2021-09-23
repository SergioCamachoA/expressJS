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

export const getOneUser = async (id) => {
  // const { id } = req.params
  try {
    const oneUser = await User.findOne({
      // attributes: ["id", "firstname", "email"],

      where: { id },
    })

    if (oneUser === null) {
      return false
      // return res.status(400).json({ response: "user not found" })
    }
    // res.status(200).json(oneUser)
    return oneUser
  } catch (error) {
    console.log(error)
    return error
    // res.status(500).json({ response: "internal server error" })
  }
}

export const getOneUserByEmail = async (email) => {
  try {
    const oneUser = await User.findOne({
      // attributes: ["id", "firstname", "email"],

      where: { email },
    })

    if (oneUser === null) {
      return false
      // return res.status(400).json({ response: "user not found" })
    }
    // res.status(200).json(oneUser)
    return oneUser
  } catch (error) {
    console.log(error)
    return error
    // res.status(500).json({ response: "internal server error" })
  }
}

export const postUser = async (req) => {
  const { firstname, lastname, email, password } = req

  const duplicated = await User.findOne({ where: { email } })
  if (!duplicated) {
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
      // res.status(200).json(newUser)
      return newUser
    } catch (error) {
      console.log(error)
      // res.status(500).json({ response: "internal server error" })
      return error
    }
  } else {
    return "this email address already exists"
    // return res
    // .status(500)
    // .json({ response: "this email address already exists" })
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
        returning: true,
        plain: true,
      }
    )
    const noPassword = Object.entries(modifiedResponse[1].dataValues).filter(
      ([key, _]) => key !== "password"
    )
    res.status(200).json({
      response: "user has been modified",
      user: Object.fromEntries(noPassword),
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    // const deleteResponse = await
    User.destroy({
      where: { id },
      // returning: true,
      // plain: true,
    })
    res.status(200).json({
      response: "user has been deleted",
      // user: deleteResponse,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ response: "internal server error" })
  }
}
