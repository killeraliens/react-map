import React, { Component } from 'react';
import Listings from './listings.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  render() {
    return(
      <div>
        <div className="left-scene">
          <Listings flats={flats} />
        </div>
        <div className="right-scene">
          <Map />
        </div>
      </div>
    )
  }
}

export default App;
