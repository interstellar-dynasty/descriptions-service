import React from 'react';

const stylesParent = {
  display: 'grid',
  gridTemplateColumns: '50% auto 25%',
  gridAutoFlow: 'row',
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

class Descriptions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div style={stylesParent}>
      <h1 style={stylesTitle}>{this.props.title}</h1>
      <hr style={stylesDivider}></hr>
      <div style={stylesDesc}>
        <ul>
          <li>
            {this.props.text}
          </li>
          <li>
            {this.props.flavor}
          </li>
          <li>
            {this.props.multiverseId}
          </li>
        </ul>
      </div>
    </div>
    )}
}

export default Descriptions;
