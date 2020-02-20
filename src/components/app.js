import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Heith Robbins Portfolio</h1>
        <div>
          {moment().format('MMMM Do YY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
