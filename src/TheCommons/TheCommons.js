import React, { Component } from 'react';
import Nav from './Nav/Nav';
import ContentContainer from './ContentContainer';
import './TheCommons.css';

// enable/disable panels here
const PANELS = [
    'home',
    'sundays',
    'mission',
    'amor',
    'sermons',
    'community',
    'media',
    'footer'
];

// enable/disable modal links here
const MODALS = [
    'give'
];

class TheCommons extends Component {
  render() {
    return (
      <div id="TheCommons">
          <Nav
              enabledPanels={PANELS}
              enabledModals={MODALS}
          />
          <ContentContainer enabledPanels={PANELS} />
      </div>
    );
  }
}

export default TheCommons;
