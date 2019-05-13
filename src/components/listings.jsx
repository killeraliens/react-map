import React, { Component } from 'react';
import FlatCard from './flat_card.jsx';

const Listings = (props) => {
  return(
    <div className="row">
      {props.flats.map((flat, index) => {
        return(
          <FlatCard
            imageUrl={flat.imageUrl}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            imageUrl={flat.imageUrl}
            key={flat.lat + ',' + flat.lng}
            index={index}
            selectFlat={props.selectFlat}
          />
        )
      })}
    </div>
  )
}

export default Listings;
