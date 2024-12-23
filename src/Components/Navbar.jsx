import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";

function handleClick() {
  document.querySelector(".fa-bars").addEventListener(click, ()=>{
  document.querySelector(".navbar").classList("add")
      
  }
}
const Navbar = () => {

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
              <i className="fa-solid fa-house"></i>About
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/service">
              <i className="fa-solid fa-house"></i>Service
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/contact">
              <i className="fa-solid fa-house"></i>Contact
            </Link>
          </li>
          <button className="nav-button">
            <Link to="/signUP">Sign Up</Link>
          </button>
        </ul>

        <div className="menu-icons">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
