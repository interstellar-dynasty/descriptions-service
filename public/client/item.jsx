import React from 'react';
import Axios from 'axios';

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 0,
    }
  }

  componentDidMount () {
    Axios.get('/desc')
    .then((datas) => {
      let key = datas.data.key;

      this.setState({
        key: key
      })
    }).catch((err) => console.log('oh no there was an error in Axios request', err))
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