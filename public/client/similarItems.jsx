import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item.jsx';
import Axios from 'axios';

const stylesParent = {
  margin: '1%',
  display: 'grid',
  gridAutoFlow: 'row column',
  gridColumnGap: '10px',
  gridRowGap: '10px',
  justifyItems: 'center'
};

const stylesDivider = {
  width: '100%',
  borderColor: 'grey',
  gridColumnStart: 1,
  gridRowStart: 4,
  borderStyle: 'solid',
  borderWidth: '0.5px'
};

const stylesHeader = {
  gridColumnStart: 1,
  gridRowStart: 5,
  justifySelf: 'start',
  color: '#c60',
  fontSize: '16px',
  fontFamily: 'verdana,arial,helvetica,sans-serif'
};

const stylesItems = {
  gridColumnStart: 1,
  gridRowStart: 6,
  justifySelf: 'center'
};

class SimilarItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  random () {
    return Math.floor(Math.random() * Math.floor(100));
  }

  renderItem () {
    let newItem = this.props.newItem;
    let key = this.random();
    return(
      <Item newItem={newItem} itemKey={key}/>
    )
  }



  render() {
    return (
    <div style={stylesParent}>
      <hr style={stylesDivider}></hr>
      <h2 style={stylesHeader}>Customers also shopped for</h2>
        <div style={stylesItems}>
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
        </div>
    </div>
  )}
}

export default SimilarItems;