require("dotenv").config()
const config = {
  dev: {
    DB_DATABASE: process.env.DB_DATABASE_DEV,
    DB_USER: process.env.DB_USER_DEV,
    DB_PASS: process.env.DB_PASS_DEV,
    SECRET_JWT: process.env.SECRET_JWT_DEV,
  },
  staging: {},
  production: {
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    SECRET_JWT: process.env.SECRET_JWT,
  },
}

// module.exports = config[process.env.switch]
export default config[process.env.SWITCH]
