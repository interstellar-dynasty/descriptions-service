import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Descriptions from './description.jsx';
import SimilarItems from './similarItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div>
      <div>
        <Descriptions />
      </div>
      <div>
        <SimilarItems />
      </div>
    </div>
  )}
}

ReactDOM.render(
  <App />,
  document.getElementById("desc"));