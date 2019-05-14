import React, { Component } from 'react';

class FlatCard extends Component {

  handleClick = () => {
    this.props.selectFlat(this.props.index);
  };

  render() {
      return(
        <div className="col col-xs-12 col-md-6 col-lg-4">
          <div className={this.props.selected ? "flat-card active" : "flat-card"} style={{backgroundImage: `url(${this.props.imageUrl})`}}  onClick={ this.handleClick }>
            <div className="name">{`${this.props.name}`}</div>
          </div>
        </div>
      )
  }
}

export default FlatCard;
