import jwt from "jsonwebtoken"
import config from "../config"

export const createToken = async (id) => {
  //   console.log(id)
  const token = jwt.sign({ payload: { id } }, config.SECRET_JWT, {
    expiresIn: "1d",
  })
  return token
}

export const validateToken = (token) => {
  try {
    console.log(config.SECRET_JWT)
    const verification = jwt.verify(token, config.SECRET_JWT)
    return verification
  } catch (err) {
    return false
  }
}

//MIDDLEWARE
export const verifyToken = (req, res, next) => {
  const { authorization } = req.headers
  const token = authorization !== undefined && authorization.split(" ")[1]
  const tokenDecoded = validateToken(token)

  if (!tokenDecoded) {
    return res.status(400).json({ msg: "invalid token" })
  }

  const { payload } = tokenDecoded

  req.body.id = payload.id
  next()
}
