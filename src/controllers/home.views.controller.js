import sequelize from "../dadabase/postgres.db"
import { User } from "../models/User"

export const getHome = async (req, res) => {
  //   try {
  res.render("pages/home.html")
  //   } catch (res) {
  // res.status(500).json({ response: "internal server error, my amigo" })
  //   }
}
