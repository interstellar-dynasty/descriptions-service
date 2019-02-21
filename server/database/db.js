const mongoose = require('mongoose')
const seeder = require('./seeder.js').seeder
//mongoose.connect('mongodb://localhost/descriptions', { useNewUrlParser: true }); //local
let db = mongoose.createConnection('mongodb://test:testing123@ds127655.mlab.com:27655/descriptions', { useNewUrlParser: true }) //mLab
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

const random = () => {
  return Math.floor(Math.random() * Math.floor(100));
}

const getItem = (key, callback) => {
  Items.findOne( {"key": key }, function(err, one) {
    if (err) {
      callback(err);
    } else {
      //console.log('what is this?', one);
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