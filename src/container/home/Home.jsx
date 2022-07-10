import React from "react";
import "./home.css";
import { Header, Footer, Displayitems } from "..";
import { Navbar, Allcategory, CarouselContainer } from "../../components";

const Home = () => {
  return (
    <div>
      <Header />
      <Allcategory />
      <Displayitems />
      <Footer />
    </div>
  );
};

export default Home;
