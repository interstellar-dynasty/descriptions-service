import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Descriptions from './description.jsx';
import SimilarItems from './similarItems.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: '',
      flavor: '',
      multiverseId: '',
      similarItems: <SimilarItems newItem={this.newItem.bind(this)}/>
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

  newItem (results) {
    let title = results.data.title;
    let text = results.data.text;
    let flavor = results.data.flavor;
    let multiverseId = results.data.multiverseId;

    this.setState({
      title: title,
      text: text,
      flavor: flavor,
      multiverseId: multiverseId,
      similarItems: <SimilarItems newItem={this.newItem.bind(this)}/>
    })
  }

  render() {
    return (
    <div>
      <div>
        <Descriptions 
        title={this.state.title}
        text={this.state.text} 
        flavor={this.state.flavor} 
        multiverseId={this.state.multiverseId}/>
      </div>
      <div>
        {this.state.similarItems}
      </div>
    </div>
  )}
}

ReactDOM.render(
  <App />,
  document.getElementById("desc"));