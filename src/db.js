const {Pool} = require('pg')
const {db} = require('./config')

const pool = new Pool({
    user: db.USER,
    password: db.PASSWORD,
    host: db.HOST,
    port: db.PORT,
    database: db.DATABASE
})

module.exports = pool;