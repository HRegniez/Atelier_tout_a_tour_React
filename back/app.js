const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const agendaRoutes = require('./routes/agenda')
const partenairesRoutes = require('./routes/partenaires')
const tarifsRoutes = require('./routes/tarifs')

const app = express()

const uri = process.env.MONGO_URI
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } }

async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, clientOptions)
    console.log("Connected to MongoDB successfully!")
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error)
  }
}

connectToMongoDB()


app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use('/api/agenda', agendaRoutes)
app.use('/api/partenaires', partenairesRoutes)
app.use('/api/tarifs', tarifsRoutes)

app.post('/api/agenda', (req, res, next) => {
  delete req.body._id
  const agendaDate = new Agenda({
    ...req.body
  })
  agendaDate.save()
    .then(() => res.status(201).json({ message: 'Objet ajouté !' }))
    .catch(error => res.status(400).json({ error }))
})


app.get('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ]
    res.status(200).json(stuff)
})

module.exports = app
