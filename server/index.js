const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const db = require('./database/db.js')
const seeder = require('./database/seeder.js').seeder;

app.use('/', express.static('./public/client/dist'))
app.use('/desc', express.static('./server/database'))


app.get('/desc', (req, res) => {
  //db.seed();
  db.getItem((err, one) => {
    if (err) {
      console.log('there was an error retrieving data at server', err)
    } else {
      res.send(one)
    }
  });
})

app.listen(4000, () => console.log('Server running on port 4000'))