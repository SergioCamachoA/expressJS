import Sequelize from "sequelize"

import config from "../config/index"

// import fs from "fs"

const db = new Sequelize(config.DB_DATABASE, config.DB_USER, config.DB_PASS, {
  host: config.DB_HOST,
  port: config.DB_PORT,
  dialect: "postgres",
  // dialectOptions: {
  //   bigNumberStrings: true,
  //   ssl: {
  //     ca: fs.readFileSync(__dirname + "/ca-certificate.cer"),
  //   },
  // },
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
})

export default db
