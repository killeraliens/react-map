import React, { Component } from 'react';
import Listings from './listings.jsx';
import flats from '../../data/flats.js';
import GoogleMap from './google_map.jsx';
// import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {lat: 48.884211, lng: 2.34689},
      pins: flats,
      selectedCoords: {}
    };
  }

  centerMap = (lat, lng) => {
    this.setState({
      center: {lat: lat, lng: lng }
    })
  };

  select = (props) => {
    this.setState({
      pins: props
    })
  };

  render() {
    return(
      <div>
        <div className="left-scene">
          <Listings flats={flats} pins={this.state.pins} selectFlat={this.select} />
        </div>
        <div className="right-scene">
          <GoogleMap pins={this.state.pins} center={this.state.center} centerMap={this.centerMap}/>
        </div>
      </div>
    )
  }
}

export default App;
