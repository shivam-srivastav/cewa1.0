import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselDisplay.scss";

import slide1 from "../../../Assets/image/slide1.jpg";
import slide2 from "../../../Assets/image/slide2.jpg";
import slide3 from "../../../Assets/image/slide3.jpg";
import slide4 from "../../../Assets/image/slide4.jpg";

class CarouselDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="corousel-h1">Face of Truth</h3>
            <p className="corousel-p">
              “A person's a person, no matter how small.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="corousel-h1">Keep Smiling</h3>
            <p className="corousel-p">
              There can be no keener revelation of a society's soul than the way
              in which it treats its children
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="corousel-h1">We are the Future</h3>
            <p className="corousel-p">
              Children are likely to live up to what you believe of them.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide4} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="corousel-h1">Gods of Heaven</h3>
            <p className="corousel-p">
              Children must be taught how to think, not what to think..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselDisplay;
