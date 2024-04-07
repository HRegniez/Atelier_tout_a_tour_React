const mongoose = require('mongoose')

const agendaDateSchema = mongoose.Schema({
    id: {type: String, required: true},
    adress: {type: String, required: true},
    dates:  {type: String, required: true},
    mapsLink: {type: String, required: false}
})

module.exports = mongoose.model('AgendaDatesSchema', agendaDateSchema)