import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

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
    <div>
      <h2>{this.state.title}</h2>
      <div>{this.state.text}</div>
    </div>
    )}
}

export default Descriptions;
