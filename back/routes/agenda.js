const express = require('express')
const router = express.Router()

const Agenda = require('../models/Agenda')


// put request

router.put('/', (req, res, next) => {
    const newAgenda = req.body

    Agenda.deleteMany({})
        .then(() => {
            return Agenda.insertMany(newAgenda)
        })
        .then(() => {
            res.status(200).json({ message: 'Agenda has been updated'})
        })
        .catch(error => {
            res.status(500).json(error)
        })
  })

// get request
router.get('/', (req, res , next) => {
    Agenda.find()
        .then(agendaData => res.status(200).json(agendaData))
        .catch(error => res.status(400).json(error))
})

module.exports = router