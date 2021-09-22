import express from "express"
import morgan from "morgan"
import path from "path"

import db from "./dadabase/postgres.db"

import userRoutesViews from "./routes/views/users"
import taskRoutesViews from "./routes/views/tasks"
import homeRoutesViews from "./routes/views/home"

import userRoutes from "./routes/user"
import taskRoutes from "./routes/task"
import authRoutes from "./routes/auth.routes"

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
app.use("/api", authRoutes)

//views
app.use("/users", userRoutesViews)
app.use("/tasks", taskRoutesViews)

app.use("/", homeRoutesViews)

export default app
