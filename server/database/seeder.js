const Request = require('request')
const db = require('./db.js')

const seeder = (callback) => {
  Request.get('https://api.magicthegathering.io/v1/cards', (err, res, body) => {
    if (err) {
      console.log('error in the API request, try again!')
    } else {
      let results = JSON.parse(body);
      let cards = results.cards;
 
      let datas = [];
      let counter = 0;
      for (let i = 0; i < 15; i++) { //cards.length
        let card = cards[i];
        for(let k = 0; k < card.foreignNames.length; k++) { 
          let foreign = card.foreignNames[k];
          console.log(foreign)
          datas.push({
            key: counter,
            title: foreign.name,
            text: foreign.text,
            flavor: foreign.flavor,
            multiverseId: foreign.multiverseid
          })
          counter++;
        }
      }
      callback(datas);
    }
  })
}


module.exports = {
  seeder
}