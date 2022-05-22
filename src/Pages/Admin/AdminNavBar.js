import React from "react";
// import "../../Components/NavBar/NavBar.css";
import "./Admin.css";
import { NavLink } from "react-router-dom";

function AdminNavBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="AdminnavBar">
        <nav className="navbar-expand-md navbar-dark AdminNav">
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
            <div
              className="admin-navbar-nav"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink
                to="/Admin"
                exact
                className="nav-item nav-link "
                activeClassName="active"
                onClick={scrollToTop}
              >
                Home
              </NavLink>
              <NavLink
                to="/Admin/AdminGallery"
                exact
                className="nav-item nav-link "
                activeClassName="active"
                onClick={scrollToTop}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/Admin/AdminHistory"
                exact
                className="nav-item nav-link "
                activeClassName="active"
                onClick={scrollToTop}
              >
                History
              </NavLink>
              <NavLink
                to="/Admin/AdminBlog"
                exact
                className="nav-item nav-link "
                activeClassName="active"
                onClick={scrollToTop}
              >
                Blog
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default AdminNavBar;
