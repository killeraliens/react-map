import React, { Component } from 'react';


class Pin extends Component {

  handleClick = (event) => {
   this.props.centerMap(this.props.lat, this.props.lng);


  }

  render() {
    return (
      <i className="pin fas fa-home" onClick={this.handleClick}></i>
    )
  }

}

export default Pin;
