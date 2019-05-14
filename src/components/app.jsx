import React, { Component } from 'react';
import Listings from './listings.jsx';
import flats from '../../data/flats.js';
import Pin from './pin.jsx';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats,
      center: {lat: 48.884211, lng: 2.34689}
    };
  }

  centerMap = () => {
    if (this.state.selectedFlat === flats) {
      return this.state.center
    }
    return { lat: this.state.selectedFlat.lat, lng: this.state.selectedFlat.lng }
  };

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    })
  };

  render() {
    return(
      <div>
        <div className="left-scene">
          <div className="listings">
              <Listings flats={flats} selectedFlat={this.state.selectedFlat} selectFlat={this.selectFlat} />
          </div>
        </div>
        <div className="right-scene">
          <GoogleMapReact defaultCenter={this.state.center} center={this.centerMap()} defaultZoom={12} bootstrapURLKeys={{ key: "AIzaSyBE17RJ8VaDNqp4sfn7mCUSCw6TB451ZEY", language: 'en' }}>
            <Pin lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default App;
