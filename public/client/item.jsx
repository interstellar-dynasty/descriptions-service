import React from 'react';
import Axios from 'axios';

const stylesItem = {
  margin: '10px'
};

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  requestItem (e) {
    e.preventDefault()
    let url = `/desc/${this.props.itemKey}`;
    console.log(`you clicked key ${this.props.itemKey}`);
    Axios.get(url)
    .then((results) => {
      this.props.newItem(results);
    })
    .then(() => {
      console.log('do something else, change pictures? rerender everything?')
      this.props.reRender();
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