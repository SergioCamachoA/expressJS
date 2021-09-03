import Sequelize from "sequelize"

const db = new Sequelize("postgres", "postgres", "yQuX^96Dsa#!", {
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
