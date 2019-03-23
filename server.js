const config = require('./config')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose.connect(config.database_url, { useNewUrlParser: true})
  .then (
    () => {
      console.log('Database Ready for Action')
    },
    err => {
      console.error(err)
    }
  )
app.all('/', (req, res) => {
  res.json({
    api: 'Heroku API!!',
    version: '0.0.1'
  })
})

app.listen(config.port, () => {
  console.log('API Ready in port' + config.port)
})