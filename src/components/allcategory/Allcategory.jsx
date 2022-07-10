import React from "react";
import "./allcategory.css";

const Allcategory = () => {
  return (
    <div className="olx__allcategory_components">
      <p className="olx__allcategory_components_buttons">
        <a href="#allcategory">
          <strong>All Category</strong>
        </a>
      </p>
      <p className="olx__allcategory_components_buttons">
        <a href="#mobiles">
          <strong>Mobiles</strong>
        </a>
      </p>
      <p className="olx__allcategory_components_buttons">
        <a href="#laptops">
          <strong>Laptops</strong>
        </a>
      </p>
      <p className="olx__allcategory_components_buttons">
        <a href="#cycles">
          <strong>Cycles</strong>
        </a>
      </p>
      <p className="olx__allcategory_components_buttons">
        <a href="#electronics">
          <strong>Electronics</strong>
        </a>
      </p>
      <p className="olx__allcategory_components_buttons">
        <a href="#others">
          <strong>Others</strong>
        </a>
      </p>
    </div>
  );
};

export default Allcategory;
