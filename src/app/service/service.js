const querys = require('../models/querys')

const createTable = (database) => {
    database.run(querys.userTable, err => {
        if(err){
            return console.error(err.message)
        }else {
            console.log('User table has been created successfully')
        }
    })
}

module.exports = createTable