import React from 'react';
import ReactDOM from 'react-dom';

class Descriptions extends React.Component {
  render() {
    return (
    <div>
      <h2>Hello Worlds!</h2>
      <div>I'm a component</div>
    </div>
    )}
}

ReactDOM.render(
  <Descriptions />,
  document.getElementById("desc"));