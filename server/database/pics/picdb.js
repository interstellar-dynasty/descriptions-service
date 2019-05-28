const mongoose = require('mongoose')
const dotenv = require('dotenv');
const path = require('path');
require('dotenv').config(path.join(__dirname, "../.env"));
console.log('pic url', process.env.PIC_CONN)

let p = mongoose.createConnection(`${process.env.PIC_CONN}`, { useNewUrlParser: true })

p.on('error', console.error.bind(console, 'connection error:'));
p.once('open', function() {
  console.log('pictures connected');
});

const schema = new mongoose.Schema({ 
  url: 'String',
  title: 'String',
  key: 'Number'
});

const Pics = p.model('picture', schema);

const getPic = (key, callback) => {
  picKey = parseInt(key);
  Pics.findOne( {"key" : picKey}, function(err, pic) {
    if (err) {
      callback(err);
    } else {
      callback(null, pic);
    }
  })
}

module.exports = {
  getPic
}