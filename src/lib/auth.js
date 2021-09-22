import jwt from "jsonwebtoken"

export const createToken = async (id) => {
  //   console.log(id)
  const token = jwt.sign({ payload: { id } }, "secret", {
    expiresIn: "1d",
  })
  return token
}

export const validateToken = (token) => {
  try {
    // console.log("TOKEN", token)
    const verification = jwt.verify(token, "secret")
    return verification
  } catch (err) {
    return false
  }
}
