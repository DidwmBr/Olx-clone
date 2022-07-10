import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import Logo from "../../assets/D1.png";
import { Link, NavLink } from "react-router-dom";

import SignIn from "../signIn/SignIn";

const Menu = () => (
  <>
    {" "}
    <nav>
      <NavLink to="/">
        <p>
          <a>Home</a>
        </p>
      </NavLink>
    </nav>
    <nav>
      <NavLink to="/explore">
        <p>
          <a>Explore</a>
        </p>
      </NavLink>
    </nav>
    <nav>
      <NavLink to="/aboutus">
        <p>
          <a>About Us</a>
        </p>
      </NavLink>
    </nav>
    <nav>
      <NavLink to="/sell">
        <p>
          <a>Sell</a>
        </p>
      </NavLink>
    </nav>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSign, setToggleSign] = useState(false);
  // const SignUp = () => (
  //   <>
  //     <p>
  //       <button type="button" onClick={() => setToggleMenu(true)}>
  //         Sign Up
  //       </button>
  //     </p>
  //   </>
  // );

  return (
    <div className="olx__navbar">
      <div className="olx__navbar-links">
        <img
          src={Logo}
          alt="Logo"
          height="70"
          width="70
        "
        />
        <div className="olx__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="olx__navbar-search">
        <input type="search" placeholder=" Search"></input>
      </div>
      <div className="olx__navbar-sign" onClick={() => setToggleSign(true)}>
        <SignIn />
      </div>
      <div className="olx__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size="27"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size="27"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="olx__navbar-menu-container scale-up-center">
            <div className="olx__navbar-menu_container">
              <Menu />
              <div className="olx__navbar-menu_container-links-sign">
                <p>
                  <button type="button">
                    <SignIn />
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* making Sign Up functional
      <div className="olx__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size="27"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <SignUp />
        )}
        {toggleMenu && (
          <div className="olx__navbar-menu-container scale-up-center">
            <div className="olx__navbar-menu_container">
              <Menu />
              <div className="olx__navbar-menu_container-links -sign">
                <SignUp />
              </div>
            </div>
          </div>
        )}
      </div> */}

      {/* this is final div */}
    </div>
  );
};

export default Navbar;

// function, variable, dom, array, object
