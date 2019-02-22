import React from 'react';
import Item from './item.jsx';

const stylesParent = {
  //flex: 2,
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

const SimilarItems = (props) => {
  const renderIt = [0, 1, 2, 3, 4, 5];

  const random = () => {
    return Math.floor(Math.random() * Math.floor(100));
  }
  
  return (
  <div style={stylesParent}>
    <hr style={stylesDivider}></hr>
    <h2 style={stylesHeader}>Customers also shopped for</h2>
    <div style={stylesItems}>
      {renderIt.map((item, i) => {
        return(
          <Item newItem={props.newItem} itemKey={random()} key={i} />
        )}
      )}
    </div>
  </div>
)
}

export default SimilarItems;