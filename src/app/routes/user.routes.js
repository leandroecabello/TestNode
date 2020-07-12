const { Router } = require('express')
const UserController = require('../controllers/user.controller')
const router = Router()

router
    .get('/', (req, res) => {
        UserController.getAll(req, res)
    })    
    .post('/create_user', (req, res) => {
        UserController.add(req, res)
    })
    .get('/user/:id', (req, res) => {
        UserController.getById(req, res)
    })
    .put('/edit/:id', (req, res) => {
        UserController.update(req, res)
    })
    .delete('/delete/:id', (req, res) => {
        UserController.delete(req, res)
    })
    // Extra Queries
    .get('/queries/birthday_after_or_before/:birthday', (req, res) => {
        UserController.getUsersWhoTurnYearsBeforeOrAfterADate(req, res)
    })
    .get('/queries/birthday_between', (req, res) => {
        UserController.getUsersWhoTurnYearsBetweenTwoDates(req, res)
    })
    .get('/queries/character_string', (req, res) => {
        UserController.getUsersContainingACharacterString(req, res)
    })

module.exports = router    