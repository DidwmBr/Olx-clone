import React from "react";
import "./header.css";
import { CarouselContainer } from "../../components";

const Header = () => {
  return (
    <div className="olx__header_bg" id="home">
      <span>
        <div className="olx__header section__padding">
          <div className="olx__header-content">
            <h1 className="Gradient__text">Price “Less”</h1>
            <h3 className="Gradient__text2">
              Get Everything At The Price You Want
            </h3>

            <div className="olx__header_carousel">
              <CarouselContainer />
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Header;
