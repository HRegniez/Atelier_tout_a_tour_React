const express = require('express')
const router = express.router()

const Tarif = require('../models/Tarif')

// PUT request

router.put('/', (req, res, next) => {
    const newTarif = req.body

    Tarif.deleteMany({})
        .then(() => {
            return Tarif.insertMany(newTarif)
        })
        .then(() => {
            res.status(200).json('tarifs updated !')
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// GET request

router.get('/', (req, res, next) => {
    Tarif.find()
        .then((tarifData) => {
            res.status(200).json(tarifData)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

module.exports = router