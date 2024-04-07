const express = require('express')
const router = express.Router()

const Agenda = require('../models/Agenda')


// put request

// router.put('/api/agenda', (req, res, next) => {
//     Agenda.update()
//   })

router.get('/', (req, res , next) => {
    Agenda.find()
        .then(agendaData => res.status(200).json(agendaData))
        .catch(error => res.status(400).json(error))
})

module.exports = router