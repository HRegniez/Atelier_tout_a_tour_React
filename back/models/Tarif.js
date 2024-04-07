const mongoose = require('mongoose')

const priceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const categoryPriceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    prices: [priceSchema]
})



module.exports = mongoose.model('Tarifs', categoryPriceSchema)