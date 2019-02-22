import React from 'react';

const stylesParent = {
  flex: 1,
  justifyItems: 'center'
}

const stylesDivider = {
  width: '100%',
  borderColor: 'grey',
  gridColumnStart: 2,
  gridRowStart: 2,
  borderStyle: 'solid',
  borderWidth: '0.5px'
};

const stylesTitle = {
  gridColumnStart: 2,
  gridRowStart: 1,
  justifySelf: 'start',
  fontWeight: 400,
  fontSize: '21px',
  fontFamily: 'Arial,sans-serif'
}

const stylesDesc = {
  gridColumnStart: 2,
  gridRowStart: 3,
  justifySelf: 'start',
  fontFamily: 'Arial,sans-serif'
}

const Descriptions = (props) => {
  return (
  <div style={stylesParent}>
    <h1 style={stylesTitle}>{props.title}</h1>
    <hr style={stylesDivider}></hr>
    <div style={stylesDesc}>
      <ul>
        <li>
          {props.text}
        </li>
        <li>
          {props.flavor}
        </li>
        <li>
          {props.multiverseId}
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Descriptions;
