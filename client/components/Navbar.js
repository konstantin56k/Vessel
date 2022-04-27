import React from "react";
import { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="navbar_background">
        <div className="navbar">
          <img id='vessel_nav' src='./images/vessel_2.png' alt='image is not found' />
          <div className="search_box">
            <form>
              <input id="search_box" type="text" placeholder="Search website" />
              <input id="search_box" type="submit" value="Search" />
            </form>
          </div>
          <div className="account">
            <h2>
              Account
            </h2>
          </div>
        </div>
      </div>
    )
  }
};

export default Navbar;