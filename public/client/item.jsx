import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img src="http://placekitten.com/100/200"></img>
    )
  }
}

export default Item;