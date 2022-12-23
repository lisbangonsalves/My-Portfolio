import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavbarData } from "./navmenus";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="logo"
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <Link
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}

          <li className="nav-item resumebtn">
            <a href={resume} download={resume} onClick={closeMenu}>
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
