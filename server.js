const config = require('./config')
const express = require('express')
const app = express()

app.all('/', (req, res) => {
  res.json({
    api: 'Heroku API!!',
    version: '0.0.1'
  })
})

app.listen(config.port, () => {
  console.log('API Ready in port' + config.port)
})