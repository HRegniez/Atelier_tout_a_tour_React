const express = require('express')
const router = express.Router()

const Partenaire = require('../models/Partenaire')

// PUT request

router.put('/', (req, res, next) => {
    const newPartenaires = req.body

    Partenaire.deleteMany({})
        .then(() => {
            return Partenaire.insertMany(newPartenaires)
        })
        .then(() => {
            res.status(200).json('partenaires updated !')
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// GET partenaire
router.get('/', (req, res, next) => {
    Partenaire.find()
        .then(partenaireData => res.status(200).json(partenaireData))
        .catch(error => res.status(400).json(error))
})

module.exports = router