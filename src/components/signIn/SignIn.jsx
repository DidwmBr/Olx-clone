import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import "./signIn.css";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    // for toggle menu

    //   <div className="olx_navbar-sign_overlay hidden">
    //     <div className="olx_navbar-sign_overlay_close">
    //       {toggleMenu ? (
    //         <RiCloseLine
    //           color="#fff"
    //           size="27"
    //           onClick={() => setToggleMenu(false)}
    //         />
    //       ) : (
    //         <button type="button" onClick={() => setToggleMenu(true)}>
    //           Sign Up
    //         </button>
    //       )}
    //       {toggleMenu && (
    //         <div className="olx__navbar-menu-container scale-up-center">
    //           <div className="olx__navbar-sign_container">
    //             <input type="email" placeholder="Email"></input>
    //             <input type="password" placeholder="Password"></input>
    //             <button type="submit">Submit</button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    // <div>
    <div>
      <NavLink to="/signin">
        <button type="button">Sign Up</button>
      </NavLink>
    </div>
  );
};

export default SignIn;
