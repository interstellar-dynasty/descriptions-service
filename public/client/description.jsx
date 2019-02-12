import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const stylesParent = {
  display: 'grid',
  gridTemplateColumns: '35% auto 35%',
  gridTemplateRows: 'auto auto auto auto auto',
  justifyItems: 'center'
}

const stylesTitle = {
  gridColumnStart: 2,
  gridRowStart: 1,
  justifySelf: 'start'
}

const stylesDesc = {
  gridColumnStart: 2,
  gridRowStart: 2
}

class Descriptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
  }

  componentDidMount () {
    Axios.get('/desc')
    .then((datas) => {
      let title = datas.data.title;
      let text = datas.data.text;
      this.setState({
        title: title,
        text: text
      })
    }).catch((err) => console.log('oh no there was an error in Axios request', err))
  }

  render() {
    return (
    <div style={stylesParent}>
      <h2 style={stylesTitle}>{this.state.title}</h2>
      <div style={stylesDesc}>{this.state.text}</div>
    </div>
    )}
}

export default Descriptions;
