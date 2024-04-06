const mongoose = require('mongoose')

const PartenaireSchema = mongoose.Schema({
    id: {type: String, required: true},
    titre: {type: String, required: true},
    sousTitre: {type: String, required: true},
    descritpion: {type: String, required: true},
    lien: {type: String, required: true},
    imgSrc: {type: String, required: true}
})

module.exports = mongoose.model('Partenaires', PartenaireSchema)