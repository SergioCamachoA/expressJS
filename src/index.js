import app from "./app"
const PORT = 3000

const main = async () => {
  await app.listen(PORT)
  console.log(`http://localhost:${PORT}`)
}
main()
