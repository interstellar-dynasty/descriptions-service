//write a customers who viewed this item also viewed
  //~ 7 other items
  //stretch case: arrows that allow scrolling to other items in the database

//use this page to pull from the database,
//map onto a smaller stateless component
//each should be a div --7 other items
import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const stylesParent = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto auto auto',
  gridTemplateRows: 'auto auto auto auto auto',
  justifyItems: 'center'
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
      <div>
      <img src="http://placekitten.com/100/200"></img>
      </div>
      <div>
      <img src="http://placekitten.com/g/100/200"></img>
      </div>
      <div>
      <img src="http://placekitten.com/100/200"></img>
      </div>
      <div>
      <img src="http://placekitten.com/g/100/200"></img>
      </div>
      <div>
      <img src="http://placekitten.com/100/200"></img>
      </div>
      <div>
      <img src="http://placekitten.com/g/100/200"></img>
      </div>
      <div>
      <img src="http://placekitten.com/100/200"></img>
      </div>
    </div>
  )}
}

export default SimilarItems;