const queries = {
    
    userTable : `CREATE TABLE IF NOT EXISTS User(
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
        name VARCHAR(45) NOT NULL,
        lastName VARCHAR(45) NOT NULL,
        birthday DATE NOT NULL,
        dni VARCHAR(45) NOT NULL UNIQUE 
    );`
}

module.exports = queries    