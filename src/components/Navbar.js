import React from "react";
import logo from "../logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark">
      <a className="navbar-brand ml-5" href="#">
        <img src={logo} style={{ height: "40px" }}></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a
              className="nav-link text-white text-uppercase ml-5"
              href="index.html"
            >
              Density Map <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white text-uppercase ml-5"
              href="map.html"
            >
              Diversity Map
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
