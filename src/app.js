import express from "express"
import morgan from "morgan"
import path from "path"

import db from "./dadabase/postgres.db"

import userRoutesViews from "./routes/views/user"
import taskRoutesViews from "./routes/views/tasks"
import testRoutesViews from "./routes/views/test"

import userRoutes from "./routes/user"
import taskRoutes from "./routes/task"

db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => {
    console.error("Unable to connect to the database:", error)
  })

const app = express()
//static files
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
app.use("/tasks", taskRoutesViews)
app.use("/test/:id", testRoutesViews)

export default app
