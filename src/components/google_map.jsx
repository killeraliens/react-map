// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import Pin from './pin.jsx'


// class GoogleMap extends Component {

//   render() {
//     return (
//       <GoogleMapReact
//        bootstrapURLKeys={{ key: "AIzaSyBE17RJ8VaDNqp4sfn7mCUSCw6TB451ZEY", language: 'en' }}
//        defaultCenter={{lat: 48.884211, lng: 2.34689}}
//        center={this.props.center}
//        defaultZoom={12}
//        yesIWantToUseGoogleMapApiInternals
//       >
//         {
//           this.props.pins.map(({lat, lng, name, price, currency, center}) => {
//             if (lat === null || lng === null) {
//               return null
//             }
//             return <Pin lat={lat} lng={lng} key={lat + ',' + lng} name={name} price={price} currency={currency} centerMap={this.props.centerMap}/>
//           })
//         }
//       </GoogleMapReact>


//     )
//   }
// }

// export default GoogleMap;
