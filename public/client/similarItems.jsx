import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item.jsx';
import Axios from 'axios';

const stylesParent = {
  display: 'grid',
  gridTemplateColumns: '5% auto 5%',
  gridAutoFlow: 'row',
  gridColumnGap: '20px',
  gridRowGap: '10px',
  justifyItems: 'center'
};

const stylesDivider = {
  width: '100%',
  borderColor: 'grey',
  gridColumnStart: 2,
  gridRowStart: 30,
  borderStyle: 'solid',
  borderWidth: '0.5px'
};

const stylesHeader = {
  gridRowStart: 31,
  gridColumnStart: 2,
  justifySelf: 'start',
  color: '#c60',
  fontSize: '16px',
  fontFamily: 'verdana,arial,helvetica,sans-serif'
};

const stylesItems = {
  gridColumnStart: 2,
  gridRowStart: 33,
  justifySelf: 'center'
};

class SimilarItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  renderItem () {
    let newItem = this.props.newItem
    return(
      <Item newItem={newItem}/>
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