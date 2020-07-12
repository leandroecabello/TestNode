const { Database } = require('sqlite3').verbose()
const config = require('./config/config')
const path = require('path')
const createTable = require('./app/service/service')

// Base de datos
const dbName = path.join(__dirname, '..', 'db', 'db.db')
const db = new Database(dbName, err => {
    if(err) {
        return console.error(err.message)
    }else {
        console.log('Database connection has been established successfully.')
        
        const app = require('./app/app')
        app.listen(config.SERVER_PORT, () => {
            console.log(`Server is running at port ${config.SERVER_PORT} `)
        })
        
        createTable(db)
    } 
}) 

module.exports = db  