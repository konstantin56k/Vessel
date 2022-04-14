import React from "react";
import { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="navbar">
        <img id='vessel_nav' src='./images/vessel_2.png' alt='image is not found' />
      </div>
    )
  }
};

export default Navbar;