import { getOneUser, getOneUserByEmail, postUser } from "./user.controller"
import { createToken, verifyToken } from "../lib/auth"
import { validateEncryptedPassword } from "../middlewares/api.user.middlewares"

export const signup = async (req, res) => {
  //   res.status(200).json({ msg: "sign UP" })
  const userCreated = await postUser(req.body)
  const token = await createToken(userCreated.id)
  //   const token = "xxx.yyy.zzz"
  userCreated.firstname
    ? res.status(201).json({
        name: userCreated.firstname,
        email: userCreated.email,
        token: token,
      })
    : res.status(400).json({ msg: userCreated })
}

export const login = async (req, res) => {
  // const { authorization } = req.headers
  // const token = authorization !== undefined && authorization.split(" ")[1]
  // const tokenDecoded = validateToken(token)

  // if (!tokenDecoded) {
  //   return res.status(400).json({ msg: "invalid token" })
  // }

  // const { payload } = tokenDecoded

  //1st
  //2nd
  //3rd
  //4th
  const validUser = await getOneUserByEmail(req.body.email)
  // const validUser = await getOneUser(payload.id)

  if (req.body.email !== validUser.dataValues.email)
    return res.status(400).json({ msg: "invalid email address" })

  const validPassword = validateEncryptedPassword(
    req.body.password,
    validUser.dataValues.password
  )

  if (!validPassword) return res.status(400).json({ msg: "invalid password" })
  //3rd
  const token = await createToken(validUser.id)
  //4th
  res.status(200).json({ msg: "valid login", token })
}
