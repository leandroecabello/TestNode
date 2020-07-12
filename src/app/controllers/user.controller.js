const db = require('../../index')

class UserController {

    static getAll(req, res) {
        const sql = 'SELECT * FROM User'
        db.all(sql, [], (err, rows) => {
            if (err) {
                res.status(500).json({ message: err.message })
                console.error(err.message)
            }else {
                 res.status(200).json(rows) 
            }     
        })
    }
    
    static add(req, res) {
        const sql = `INSERT INTO User(name, lastName, birthday, dni) VALUES(?, ?, ?, ?)`
        const newUser = [req.body.name, req.body.lastName, req.body.birthday, req.body.dni]
        db.all(sql, newUser, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err.message })
                console.error(err.message)
            }else {
                console.log(newUser)
                res.status(200).json({ message: 'User created successfully.' })
            }
        })
    }

    static getById(req, res) {
        const id = req.params.id
        const sql = 'SELECT * FROM User WHERE id = ?'
        db.get(sql, id, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err.message })
                console.error(err.message)
            }else {
                res.status(200).json(rows)
            }
        })
    }

    static update(req, res) {
        const id = req.params.id
        const dataUser = [req.body.name, req.body.lastName, req.body.birthday, req.body.dni, id]  
        const sql = 'UPDATE User SET name=?, lastName=?, birthday=?, dni=? WHERE id=?'
        db.run(sql, dataUser, err => {
            if (err) {
                res.status(500).json({ message: err.message })
                console.error(err.message)
            }else {
                res.status(200).json({ message: `User with id ${id} updated successfully.` })
            }
        })
    }

    static delete(req, res) {
        const id = req.params.id
        const sql = 'DELETE FROM User WHERE id=?'
        db.run(sql, id, err => {
            if (err) {
                res.status(500).json({ message: err.message })
                console.error(err.message)
            }else {
                res.status(200).json({ message: `User with id ${id} was disabled correctly` });
            }
        })
    }

    // Extra Queries
    static getUsersWhoTurnYearsBeforeOrAfterADate(req, res) {
        const sql = 'SELECT * FROM User WHERE birthday < ? OR birthday > ?'
        const birthday1 = req.params.birthday
        const birthday2 = req.params.birthday
        db.all(sql, birthday1, birthday2, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err.message })
                console.error(err.message)
            }else {
                 res.status(200).json(rows) 
            }     
        })
    }

    static getUsersWhoTurnYearsBetweenTwoDates(req, res) {
        const sql = 'SELECT * FROM User WHERE birthday BETWEEN ? AND ?'
        const birthday1 = req.query.birthday
        const birthday2 = req.query.birthday
        db.all(sql, birthday1, birthday2, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err.message })
                console.error(err.message)
            }else {
                 res.status(200).json(rows) 
            }     
        })
    }

    static getUsersContainingACharacterString (req, res) {
        const sql = 'SELECT * FROM User WHERE name LIKE ? OR lastName LIKE ? '
        const character1 = req.query.name
        const character2 = req.query.lastName
        db.all(sql, `%${character1}%`, `%${character2}%`, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err.message })
                console.error(err.message)
            }else {
                 res.status(200).json(rows) 
            }     
        })
    }
}

module.exports = UserController