import React from 'react';
import Axios from 'axios';

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

  //callback could be this.props.function

  requestItem (e) {
    //this request works for each key
    //now each service just needs a bucket to pull the data to their respective state
    //we need a callback on the axios request data that goes to each service
      //ideally this action will have multiple Axios requests
    e.preventDefault()
    let url = `/desc/${this.state.key}`;
    console.log(`you clicked key ${this.state.key}`);
    Axios.get(url)
    .then((results) => {
      this.props.newItem(results);
    })
    .catch((err) => console.log('error in Axios requestItem', err))
  }

  render() {
    let newItem = this.props.newItem;
    return (
      <img src="http://placekitten.com/200/300" onClick={this.requestItem.bind(this)}></img>
    )
  }
}

export default Item;

//add a click handler
//on click take to whatever id is associated with the state of this image