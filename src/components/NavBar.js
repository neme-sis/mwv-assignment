import React, { useState } from "react";
import "../styles/NavBar.css";
import navIcon from "../assets/shape4.png";
import logoIcon from "../assets/logo.png";
import navSubIcon from "../assets/shape3.png";
import { NavLink } from "react-router-dom";
import FreeSignUp from "./FreeSignUp";

const links = [
  { linkTo: "/", linkName: "Home" },
  { linkTo: "/features", linkName: "Features" },
  { linkTo: "/pricing", linkName: "Pricing" },
  { linkTo: "/contact", linkName: "Contact" },
  { linkTo: "/login", linkName: "Login" },
];

const NavBar = () => {
  const [doesNavShow, setDoesNavShow] = useState(false);
  return (
    <div className="navbar-wrapper">
      {/* {doesNavShow && <div className="links-show-all-hide"></div>} */}
      <img src={navIcon} className="navbar-icon" alt="" />
      <nav>
        <div className="logo">
          <img src={logoIcon} className="logo-icon" alt="" />
          <h1 className="logo-name">Enhance AI</h1>
        </div>
        <div
          className={`links links-absolute ${
            doesNavShow ? "links-absolute-visible" : ""
          }`}
        >
          {links.map((link, i) => (
            <NavLink
              to={link.linkTo}
              key={i}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-selected" : "")
              }
              onClick={() => setDoesNavShow(false)}
            >
              {link.linkName}
            </NavLink>
          ))}
          {doesNavShow && (
            <div className="free-sign-nav-toggle">
              <FreeSignUp theme="purple" />
            </div>
          )}
        </div>
        <div className="free-sign-nav">
          <FreeSignUp theme="purple" />
        </div>
        <div
          className={`three-line-container ${
            doesNavShow ? "three-line-active" : ""
          }`}
          onClick={() => setDoesNavShow(!doesNavShow)}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </nav>
      <img src={navSubIcon} className="nav-sub-icon" alt="" />
    </div>
  );
};

export default NavBar;
