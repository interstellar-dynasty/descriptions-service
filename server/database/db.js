const mongoose = require('mongoose')
const seeder = require('./seeder.js').seeder
// const path = require('path');
// require('dotenv').config(path.join(__dirname, ".env"));
const dotenv = require('dotenv');
dotenv.config();
console.log('url', process.env.DESC_CONN)
//mongoose.connect('mongodb://localhost/descriptions', { useNewUrlParser: true }); //local
let db = mongoose.createConnection(`${process.env.DESC_CONN}`, { useNewUrlParser: true }) //mLab
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

const schema = new mongoose.Schema({ 
  key: 'Number',
  title: 'String',
  text: 'String',
  flavor: 'String',
  multiverseId: 'String'
});

const Items = db.model('Items', schema);

const getItem = (key, callback) => {
  Items.findOne( {"key": key }, function(err, one) {
    if (err) {
      callback(err);
    } else {
      callback(null, one);
    }
  })
}

const getNewItem = (key, callback) => {
  key = parseInt(key);
  Items.findOne( {"key": key}, function(err, newOne) {
    if (err) {
      callback(err);
    } else {
      callback(null, newOne);
    }
  })
}

const seed = () => {
  seeder((datas) => {
    Items.insertMany(datas)
    .then(() => {
      console.log('successfully added data to the database!');
    })
    .catch(err => console.log('could not put data into mongo', err))
  })
}

module.exports = {
  getItem,
  getNewItem
  //seed
}