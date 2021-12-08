import React, { Component } from "react";
import { Carousel , Image } from "react-bootstrap";
import Image1 from "../../assets/burger.jpeg";
import Image2 from "../../assets/fries.jpeg";
import Image3 from "../../assets/coke.jpeg";
import Image4 from "../../assets/pepsi.jpeg";

class Silder extends Component {
  render() {
    return (
      <div>
        <Carousel fade>
          <Carousel.Item>
            <Image
              className="d-block w-100 homeslider"
              src={Image1}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100 homeslider"
              src={Image2}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100 homeslider"
              src={Image3}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100 homeslider"
              src={Image4}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Silder;
