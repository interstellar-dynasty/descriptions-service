import React from 'react';
import Axios from 'axios';

const stylesItem = {
  margin: '10px',
  height: '200px',
  width: '200px'
};

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picUrl: ''
    }
  }

  requestItem (e) {
    e.preventDefault()
    //console.log(this.props)
    let url = `/desc/${this.props.itemKey}`;
    console.log(`you clicked key ${this.props.itemKey}`);
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
      //console.log('look at our results!', results.data.url)
      let picUrl = results.data.url;
      //this is that cool pic url for default if need be
      //this.setState({
        //'https://picture-service-fec-bucket.s3.amazonaws.com/folder91/Pillars of Creation.jpg'
      //console.log('look at the pic urls', picUrl)
      if (picUrl) {
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