import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 0,
      url: ''
    }
  }

  render() {
    return (
      <img src="http://placekitten.com/200/300"></img>
    )
  }
}

export default Item;

//add a click handler
//on click take to whatever id is associated with the state of this image