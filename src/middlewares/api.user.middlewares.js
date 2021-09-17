import Joi from "joi"

const schemaUser = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(18).required(),
})

export const postValidation = async (req, res, next) => {
  try {
    await schemaUser.validateAsync(req.body, {
      abortEarly: false,
    })
    // console.log(response)
  } catch (error) {
    console.log(error.details)
    const errores = []
    error.details.forEach((el) => {
      errores.push(el.message)
    })
    res.status(400).json({ msg: errores })
  }
  return next()
}

const bcrypt = require("bcrypt")

export const encryptPasswordUser = (req, _, next) => {
  const passwordToEncrypt = req.body.password
  const saltRounds = 10

  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(passwordToEncrypt, salt)

  // res.status(200).json({ msg: hash })
  req.body.password = hash

  return next()
}

export const encryptPasswordUserUpdate = (req, _, next) => {
  req.body.newValue =
    req.body.type === "password" &&
    bcrypt.hashSync(req.body.newValue, bcrypt.genSaltSync(10))
  return next()
}
