import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/" className="navbar-brand ">
          <h4>Khangkhui Phungdhar</h4>
        </Link>
        <button
          className={`navbar-toggler`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div
            className="navbar-nav"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <NavLink
              to="/"
              exact
              className="nav-item nav-link "
              activeClassName="active"
              onClick={scrollToTop}
            >
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              exact
              className="nav-item nav-link "
              activeClassName="active"
              onClick={scrollToTop}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/history"
              exact
              className="nav-item nav-link "
              activeClassName="active"
              onClick={scrollToTop}
            >
              History
            </NavLink>
            <NavLink
              to="/blog"
              exact
              className="nav-item nav-link "
              activeClassName="active"
              onClick={scrollToTop}
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
