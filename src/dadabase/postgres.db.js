import Sequelize from "sequelize"

import config from "../config/index"

const db = new Sequelize(config.DB_DATABASE, config.DB_USER, config.DB_PASS, {
  host: "localhost",
  port: 5555,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
})

export default db
