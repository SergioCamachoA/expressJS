require("dotenv").config()
const config = {
  dev: {
    DB_DATABASE: process.env.DB_DATABASE_DEV,
    DB_USER: process.env.DB_USER_DEV,
    DB_PASS: process.env.DB_PASS_DEV,
    SECRET_JWT: process.env.SECRET_JWT_DEV,
    DB_PORT: process.env.DB_PORT_DEV,
    DB_HOST: process.env.DB_HOST_DEV,
  },
  staging: {},
  production: {
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    SECRET_JWT: process.env.SECRET_JWT,
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST,
  },
}

// module.exports = config[process.env.switch]
export default config[process.env.SWITCH]
