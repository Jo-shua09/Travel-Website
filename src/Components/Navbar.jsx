import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
    window.removeEventListener("scroll", toggleMenu);
  }
  window.removeEventListener("scroll", toggleMenu);

  return (
    <div className="navbar ">
      <nav className="nav-items">
        <h1 className="nav-logo">Tripps</h1>

        <ul className="nav-menu">
          <li className="nav-links active">
            <Link to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/about">
              <i className="fa-solid fa-circle-info"></i>About
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/service">
              <i className="fa-solid fa-briefcase"></i>Service
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/contact">
              <i className="fa-solid fa-id-card"></i>Contact
            </Link>
          </li>
          <button className="nav-button">
            <Link to="/signUP">Sign Up</Link>
          </button>
        </ul>

        <div className="menu-icons">
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} onClick={toggleMenu}></i>
        </div>

        <div className={isOpen ? "menu-items show" : "menu-items"}>
          <ul className="menu-list">
            <li className="nav-links active">
              <Link to="/">
                <i className="fa-solid fa-house"></i> Home
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/about">
                <i className="fa-solid fa-circle-info"></i>About
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/service">
                <i className="fa-solid fa-briefcase"></i>Service
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/contact">
                <i className="fa-solid fa-id-card"></i>Contact
              </Link>
            </li>
            <button className="menu-button">
              <Link to="/signUP">Sign Up</Link>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
