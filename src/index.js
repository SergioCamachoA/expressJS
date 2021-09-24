import app from "./app"
// require("dotenv").config()

// const PORT = 3000
const PORT = process.env.PORT || 3000

const main = async () => {
  await app.listen(PORT)
  console.log(`http://localhost:${PORT}`)
}
main()
