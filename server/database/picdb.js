const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://laura:laura@fecamazonpicturedatabase-bcucz.mongodb.net/test?retryWrites=true')

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected to the pictures');
});

const schema = new mongoose.Schema({ 
  url: 'String',
  title: 'String',
  key: 'Number'
});

const Pics = mongoose.model('picture', schema);

const getPic = (key, callback) => {
  //key = parseInt(key);
  Pics.findOne( {key : 50}, function(err, pic) {
    if (err) {
      console.log('error in the picture database', err)
      //callback(err);
    } else {
      console.log('what are you?', pic)
      //callback(null, pic);
    }
  })
}

getPic()

module.exports = {
  getPic
}