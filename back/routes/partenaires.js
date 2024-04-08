const express = require('express')
const router = express.Router()

const PartenairesCtrl = require('../controllers/partenaires')

// PUT request

router.put('/', PartenairesCtrl.putPartenaire)

// GET partenaire
router.get('/', PartenairesCtrl.getPartenaire)

module.exports = router