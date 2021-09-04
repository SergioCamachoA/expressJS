import { DataTypes } from "sequelize"
import db from "../dadabase/postgres.db"
import { Task } from "./Task"

export const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
)

User.hasMany(Task, { foreignKey: "userid", sourceKey: "id" })
Task.belongsTo(User, { foreignKey: "userid" })
// Task.belongsTo(User, { foreignKey: "userid", targetId: "id" })
