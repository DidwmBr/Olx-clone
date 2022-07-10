import React from "react";
import { WhatOlxclone, Displayitems, Explore, Home } from "./container/index";
import { Allcategory, Cta, Navbar, SignIn } from "./components";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/aboutus" element={<WhatOlxclone />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/aboutus" element={<WhatOlxclone />} />
            {/* <Route path="/sell" element={<Sell />} /> */}
            {/* <Route path="/profile/:username" element={<Profile />} /> */}
          </Routes>
        </div>{" "}
        <div className="olx__body">
          {/* <Allcategory /> */}
          {/* <Displayitems /> */}
          {/* <Cta /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
