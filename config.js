var dotenv = require('dotenv')
var path = require('path')

var root = path.join.bind(this, __dirname)
dotenv.config({path: root('.env')})

module.exports = {
  PORT: process.env.PORT ? process.env.PORT : 5000,
  NODE_ENV: process.env.NODE_ENV,
  MAIL: process.env.MAIL,
  PASSWORD_MAIL: process.env.PASSWORD_MAIL
}