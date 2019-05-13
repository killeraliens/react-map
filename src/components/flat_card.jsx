import React, { Component } from 'react';

class FlatCard extends Component {

  handleClick = () => {
     // console.log(this.props);
    this.props.selectFlat(this.props);
  };

  render() {
    return(
      <div className="col col-xs-12 col-md-6 col-lg-4">
        <div className="flat-card" style={{backgroundImage: `url(${this.props.imageUrl})`}}  onClick={ this.handleClick }></div>
      </div>
    )
  }
}

export default FlatCard;
