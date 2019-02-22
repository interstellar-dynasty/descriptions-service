const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const db = require('./database/db.js')
//const seeder = require('./database/seeder.js').seeder
const pic = require('./database/pics/picdb.js')

app.use('/', express.static('./public/client/dist'))
app.use('/desc', express.static('/server/database'))
app.use('/pic', express.static('/server/database/pics'))
app.use( bodyParser.json() );

app.get('/desc', (req, res) => {
  //db.seed();
  db.getItem(60, (err, one) => {
    if (err) {
      console.log('there was an error retrieving data at server', err);
    } else {
      //console.log('what is the one?', one)
      res.send(one);
    }
  });
})

app.get('/desc/:key', (req, res) => {
  //console.log('look at the request', req.params);
  let key = req.params.key;
  db.getNewItem(key, (err, newOne) => {
    if (err) {
      console.log('there was an error retrieving data at server', err);
    } else {
      res.send(newOne);
    }
  })
})

app.get('/pic/:picKey', (req, res) => {
  let picKey = req.params.picKey;
  //console.log('what is req.params', req.params.picKey)
  pic.getPic(picKey, (err, picUrl) => {
    if (err) {
      console.log('there was an error retrieving picture at server', err);
    } else {
      res.send(picUrl);
    }
  })
})

app.listen(4000, () => console.log('Server running on port 4000'))