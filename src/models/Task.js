import { DataTypes } from "sequelize"
import db from "../dadabase/postgres.db"

export const Task = db.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    done: {
      type: DataTypes.BOOLEAN,
    },
    deliverydate: {
      type: DataTypes.DATE,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "tasks",
    timestamps: false,
  }
)
