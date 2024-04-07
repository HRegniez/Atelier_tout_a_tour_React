const express = require('express')
const router = express.Router()

const Partenaire = require('../models/Partenaire')

// GET partenaire
router.get('/', (req, res, next) => {
    Partenaire.find()
        .then(partenaireData => res.status(200).json(partenaireData))
        .catch(error => res.status(400).json(error))
})

module.exports = router