import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Descriptions from './description.jsx';
import Items from './items.jsx';


class App extends React.Component {
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
    window.addEventListener('newPage', (event) => {
      let key = event.detail
      Axios.get(`/desc/${key}`)
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
    })
    .then()
    .catch((err) => console.log('oh no there was an error in Axios request', err))
    }, false);

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
    })
    .then()
    .catch((err) => console.log('oh no there was an error in Axios request', err))
  }

  newDescription (results) {
    let title = results.data.title;
    let text = results.data.text;
    let flavor = results.data.flavor;
    let multiverseId = results.data.multiverseId;

    this.setState({
      title: title,
      text: text,
      flavor: flavor,
      multiverseId: multiverseId
    })
  }

  render() {
    return (
      <div>
        <Descriptions 
        title={this.state.title}
        text={this.state.text} 
        flavor={this.state.flavor} 
        multiverseId={this.state.multiverseId}/>
      </div>
  )}
}


class SimilarItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 60
    }
  }

  newItem (results) {
    let key = results.data.key;
    this.setState({
      key: results.data.key
    })
  }

  render() {
    return (
    <div>
      <Items newItem={this.newItem.bind(this)}/>
    </div>
  )}
}

ReactDOM.render(
  <App />,
  document.getElementById("desc"));

ReactDOM.render(
  <SimilarItems />,
  document.getElementById("similar"));

