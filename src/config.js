const { config } = require('dotenv')

config()

module.exports = {
    db: {
        USER: process.env.USER,
        PASSWORD: process.env.PASSWORD,
        HOST: process.env.HOST,
        PORT: process.env.PORT,
        DATABASE: process.env.DATABASE
    }
}