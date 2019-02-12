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
  gridRowStart: 2,
  justifySelf: 'start'
}

class Descriptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: '',
      flavor: '',
      multiverseId: ''
    }
  }

  componentDidMount () {
    Axios.get('/desc')
    .then((datas) => {
      let title = datas.data.title;
      let text = datas.data.text;
      let flavor = datas.data.flavor;
      let multiverseId = datas.data.multiverseId;

      this.setState({
        title: title,
        text: text,
        flavor: flavor,
        multiverseId: multiverseId
      })
    }).catch((err) => console.log('oh no there was an error in Axios request', err))
  }

  render() {
    return (
    <div style={stylesParent}>
      <h2 style={stylesTitle}>{this.state.title}</h2>
      <div style={stylesDesc}>
        <ul>
          <li>
            {this.state.text}
          </li>
          <li>
            {this.state.flavor}
          </li>
          <li>
            {this.state.multiverseId}
          </li>
        </ul>
      </div>
    </div>
    )}
}

export default Descriptions;