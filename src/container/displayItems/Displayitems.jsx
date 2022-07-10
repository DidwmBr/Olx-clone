import React from "react";
import "./displayItems.css";
// import ShoppingCartRounded from "@mui/material";
import Img001 from "../../assets/Cycle_01.png";
import Img002 from "../../assets/Cycle_02.png";
import Img003 from "../../assets/Cycle_03.png";
import Img004 from "../../assets/Laptop_01.png";

const DisplayItems = () => {
  return (
    <div className="Olx__featured_display">
      <img src={Img001} width="200" className="Olx__featured_display_items" />
      <img src={Img002} width="200" className="Olx__featured_display_items" />
      <img src={Img003} width="200" className="Olx__featured_display_items" />
      <img src={Img004} width="200" className="Olx__featured_display_items" />
    </div>
  );
};

export default DisplayItems;
