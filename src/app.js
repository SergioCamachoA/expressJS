import path from "path"
import userRoutesViews from "./routes/user.views"

import express from "express"
import morgan from "morgan"
import userRoutes from "./routes/user"
import taskRoutes from "./routes/task"

import db from "./dadabase/postgres.db"

db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => {
    console.error("Unable to connect to the database:", error)
  })

const app = express()

app.use(express.static("public"))

//config view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.engine("html", require("ejs").renderFile)

//middleware
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/tasks", taskRoutes)
app.use("/api/users", userRoutes)

app.use("/users", userRoutesViews)

export default app
