import React from 'react';
import Axios from 'axios';

const stylesItem = {
  margin: '10px',
  height: '200px',
  width: '200px',
};

const newPage = (item) => {
  const event = new CustomEvent('newPage', { detail: item });
  window.dispatchEvent(event);
}

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picUrl: ''
    }
  }

  requestItem (e) {
    e.preventDefault()
    let url = `/desc/${this.props.itemKey}`;
    newPage(this.props.itemKey);
    Axios.get(url)
    .then((results) => {
      this.props.newItem(results);
    })
    .catch((err) => console.log('error in Axios requestItem', err))
  }

  getPic () {
    let url = `/pic/${this.props.itemKey}`;
    Axios.get(url)
    .then((results) =>  {
      let picUrl = results.data.url;
      if (picUrl !== '') {
        this.setState({
          picUrl: picUrl
        })
      } else {
        this.getPic()
      }
    })
  }

  componentDidMount() {
    this.getPic()
  }


  componentDidUpdate(prevProps) {
    if (this.props.itemKey !== prevProps.itemKey) {
      this.getPic();
    }
  }

  render() {
    return (
      <img src={this.state.picUrl} style={stylesItem} onClick={this.requestItem.bind(this)} />
    )
  }
}

export default Item;