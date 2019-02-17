import React from 'react';
import Axios from 'axios';

const stylesItem = {
  margin: '10px'
};

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 0,
      image: "http://placekitten.com/200/250"
    }
  }


  requestItem (e) {
    e.preventDefault()
    let url = `/desc/${this.props.itemKey}`;
    console.log(`you clicked key ${this.props.itemKey}`);
    Axios.get(url)
    .then((results) => {
      this.props.newItem(results);
    })
    .catch((err) => console.log('error in Axios requestItem', err))
  }

  render() {
    return (
      <img src="http://placekitten.com/200/250" style={stylesItem} onClick={this.requestItem.bind(this)}></img>
    )
  }
}

export default Item;