const queries = require('../models/queries')

const createTable = (database) => {
    database.run(queries.userTable, err => {
        if(err){
            return console.error(err.message)
        }else {
            console.log('User table has been created successfully')
        }
    })
}

module.exports = createTable