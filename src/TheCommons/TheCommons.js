import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ContentContainer from './ContentContainer';
import './TheCommons.css';

class TheCommons extends Component {
  render() {
    return (
      <div id="TheCommons">
          <Sidebar/>
          <ContentContainer/>
      </div>
    );
  }
}

export default TheCommons;
