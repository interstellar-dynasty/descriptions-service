const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const db = require('./database/db.js')
const seeder = require('./database/seeder.js').seeder;

app.get('/', (req, res) => {
  //db.seed();
  res.send('database has data')
})
//this is the services server
//need to define an api, which will grab data from the database

app.listen(4000, () => console.log('Server running on port 4000'))