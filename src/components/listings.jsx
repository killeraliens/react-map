import React, { Component } from 'react';
import FlatCard from './flat_card.jsx';

const Listings = (props) => {
  return(
    <div className="row">
      {props.flats.map((flat, index) => {
        return(
          <FlatCard
            name={flat.name}
            imageUrl={flat.imageUrl}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            key={flat.lat + ',' + flat.lng}
            index={index}
            selected={flat.name === props.selectedFlat.name}
            selectFlat={props.selectFlat}
          />
        )
      })}
    </div>
  )
}

export default Listings;
