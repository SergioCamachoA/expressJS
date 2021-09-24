import Sequelize from "sequelize"

import config from "../config/index"

import fs from "fs"

const db = new Sequelize(config.DB_DATABASE, config.DB_USER, config.DB_PASS, {
  host: "db-postgresql-nyc3-77003-do-user-9892941-0.b.db.ondigitalocean.com",
  // host: "localhost",
  port: 25060,
  // port: 5555,
  dialect: "postgres",
  dialectOptions: {
    bigNumberStrings: true,
    ssl: {
      ca: fs.readFileSync(__dirname + "/ca-certificate.cer"),
    },
  },
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
})

export default db
