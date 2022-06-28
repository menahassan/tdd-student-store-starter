const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const store = require('./routes/store.js')
const app = express()

app.use(bodyParser.json())

app.use(morgan('tiny'))

app.use('/store', store)

app.get('/', (req, res) => {
  res.status(200).send({"ping" : "pong"})
})

module.exports = app;