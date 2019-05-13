import React, { Component } from 'react';

class FlatCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: false
    }
  }

  handleClick = () => {
    this.props.selectFlat(this.props.index);
    this.setState({
      selected: !this.state.selected
    })
  };

  render() {
    return(
      <div className="col col-xs-12 col-md-6 col-lg-4">
        <div className={this.state.selected ? "flat-card border" : "flat-card"} style={{backgroundImage: `url(${this.props.imageUrl})`}}  onClick={ this.handleClick }></div>
      </div>
    )
  }
}

export default FlatCard;
