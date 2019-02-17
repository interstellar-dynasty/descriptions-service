import React from 'react';
import Axios from 'axios';

const stylesItem = {
  margin: '10px'
};

const Item = (props) => {

  const requestItem = (e) => {
    e.preventDefault()
    let url = `/desc/${props.itemKey}`;
    console.log(`you clicked key ${props.itemKey}`);
    Axios.get(url)
    .then((results) => {
      props.newItem(results);
    })
    .catch((err) => console.log('error in Axios requestItem', err))
  }

  return (
    <img src="http://placekitten.com/200/250" style={stylesItem} onClick={requestItem.bind(this)} />
  )
}

export default Item;