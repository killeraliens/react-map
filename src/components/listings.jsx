import React, { Component } from 'react';
import FlatCard from './flat_card.jsx';

const Listings = ({flats}) => {
  return(
    <div className="listings">
      <div className="row">
          {flats.map((props) => {
            return(
              <FlatCard
                imageUrl={props.imageUrl}
                price={props.price}
                priceCurrency={props.priceCurrency}
                imageUrl={props.imageUrl}
                key={props.lat + ',' + props.lng}
                coords={{lat: props.lat, lng: props.lng}}
                selectFlat={props.selectFlat}
              />
            )
          })}
      </div>
    </div>

  )

}

export default Listings;
