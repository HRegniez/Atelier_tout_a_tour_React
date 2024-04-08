const express = require('express')
const router = express.router()

const tarifsCtrl = require('../controllers/tarifs')

// PUT request

router.put('/', tarifsCtrl.putTarifs)

// GET request

router.get('/', tarifsCtrl.getTarifs )

module.exports = router