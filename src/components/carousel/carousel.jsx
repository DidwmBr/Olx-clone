import React from "react";
import { Carousel } from "react-bootstrap";
import Image1 from "../../assets/D1.png";
import Image2 from "../../assets/D2.png";
import Image3 from "../../assets/D3.png";

import "./carousel.css";
const CarouselContainer = () => {
  return (
    <div className="olx__header_carousel">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={Image1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={Image2} alt="Second slide" />

          {/* <Carousel.Caption></Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={Image3} alt="Third slide" />

          {/* <Carousel.Caption></Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
