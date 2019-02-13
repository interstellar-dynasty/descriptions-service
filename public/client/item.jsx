import React from 'react';
import Axios from 'axios';
import Descriptions from './description.jsx';

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 0
    }
  }

  componentDidMount () {
    Axios.get('/desc')
    .then((datas) => {
      let key = datas.data.key;

      this.setState({
        key: key
      })
    })
    .catch((err) => console.log('oh no there was an error in Axios request', err))
  }

  requestItem (e) {
    e.preventDefault()
    let url = `/desc/${this.state.key}`;
    alert(`you clicked key ${this.state.key}`)
    Axios.get(url)
    .then((results) => {
      console.log('this is what the axios request does:', results)
    })
    .catch((err) => console.log('error in Axios requestItem', err))
  }

  render() {
    return (
      <img src="http://placekitten.com/200/300" onClick={this.requestItem.bind(this)}></img>
    )
  }
}

export default Item;

//add a click handler
//on click take to whatever id is associated with the state of this image