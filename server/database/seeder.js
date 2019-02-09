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
      for (let i = 0; i < 15; i++) { //cards.length
        let card = cards[i];
        // datas.push({
        //   title: card.name,
        //   text: card.text
        // })
        for(let k = 0; k < card.foreignNames.length; k++) { 
          let foreign = card.foreignNames[k];
          datas.push({
            title: foreign.name,
            text: foreign.text
          })
        }
        //console.log('datas here', datas)
      }
      callback(datas);
    }
  })
}

module.exports = {
  seeder
}