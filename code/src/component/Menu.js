import React, { Component } from "react";
import Slider from './home/Slider.js';
import About from './home/About';

class Menu extends Component {
  render() {
    return (
      <div>
        < Slider />
        < About />
      </div>
    );
  }
}

export default Menu;
