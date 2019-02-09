const mongoose = require('mongoose')
const seeder = require('./seeder.js').seeder
//mongoose.connect('mongodb://localhost/descriptions', { useNewUrlParser: true }); //local
mongoose.connect('mongodb://test:testing123@ds127655.mlab.com:27655/descriptions', { useNewUrlParser: true }) //mLab
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
  // we're connected!
});

const schema = new mongoose.Schema({ 
  title: 'String',
  text: 'String'
})

const Items = mongoose.model('Items', schema)

console.log('is the database connected?')

const getItem = (callback) => {
  Items.findOne( {"title": "祖神に選ばれし者" }, function(err, one) {
    if (err) {
      console.log('error finding One from database', err);
    } else {
      console.log('what is this?', one);
      callback(err, one)
    }
  })
}


// const seed = () => {
//   seeder((datas) => {
//     Items.insertMany(datas)
//     .then(() => {
//       console.log('successfully added data to the database!')
//     })
//     .catch(err => console.log('could not put data into mongo', err))
//   })
// }

module.exports = {
  getItem
}