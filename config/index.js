module.exports = {
    port: process.env.PORT || 3000,
    database_url: process.env.STRING_CONNECTION || 'mongodb://localhost:27017/heroku'
  }