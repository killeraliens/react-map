import React, { Component } from 'react';
import FlatCard from './flat_card.jsx';

const Listings = ({flats}) => {
  return(
    <div className="listings">
      <div className="row">
          {flats.map(({name, price, priceCurrency, imageUrl, lat, lng}) => {
            return(
              <FlatCard
                imageUrl={imageUrl}
                price={price}
                priceCurrency={priceCurrency}
                imageUrl={imageUrl}
                key={lat + ',' + lng}
              />
            )
          })}
      </div>
    </div>

  )

}

export default Listings;
