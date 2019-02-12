//write a customers who viewed this item also viewed
  //~ 7 other items
  //stretch case: arrows that allow scrolling to other items in the database

//use this page to pull from the database,
//map onto a smaller stateless component
//each should be a div --7 other items
import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item.jsx';
import Axios from 'axios';

const stylesParent = {
  display: 'grid',
  //gridAutoFlow: 'column',
  gridTemplateColumns: '100px 100px 100px 100px 100px 100px',
  // gridTemplateRows: 'auto auto auto auto auto',
  gridColumnGap: '10px',
  justifyItems: 'center'
}

const stylesItems = {
  
}

class SimilarItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
    <div styles={stylesParent}>
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
    </div>
  )}
}

export default SimilarItems;