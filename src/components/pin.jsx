import React, { Component } from 'react';


class Pin extends Component {

  render() {
    if (this.props.lat) {
      return (
        <i className="pin fas fa-home" ></i>
      )

    }
    return null;
  }
}

export default Pin;
