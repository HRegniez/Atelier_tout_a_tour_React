const express = require('express')
const router = express.Router()

const agendaCtrl = require('../controllers/agenda')


// put request
router.put('/', agendaCtrl.putAgenda)

// get request
router.get('/', agendaCtrl.getAgenda)

module.exports = router