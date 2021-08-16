import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/" className="navbar-brand ">
          <h4>Khangkhui Phungdhar</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="navbar-nav">
            <NavLink
              to="/"
              exact
              className="nav-item nav-link "
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              exact
              className="nav-item nav-link "
              activeClassName="active"
            >
              Gallery
            </NavLink>
            <NavLink
              to="/history"
              exact
              className="nav-item nav-link "
              activeClassName="active"
            >
              History
            </NavLink>
            <NavLink
              to="/blog"
              exact
              className="nav-item nav-link "
              activeClassName="active"
            >
              Blog
            </NavLink>
            <a className="nav-item nav-link " href="#about">
              About
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
