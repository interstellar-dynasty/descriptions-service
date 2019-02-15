import React from 'react';
import Axios from 'axios';

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 0
    }
  }
  //need to lift this state up so that related items re-renders with each click.
  //best idea is to call this get request and send the key down in props each time

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
    console.log(`you clicked key ${this.state.key}`);
    Axios.get(url)
    .then((results) => {
      this.props.newItem(results);
    })
    .then(() => {
      console.log('are we trying to reRender?')
      //this.props.rerender()
      //try changing state?
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