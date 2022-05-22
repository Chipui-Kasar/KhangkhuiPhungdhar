import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Admin.css";
import AdminNavBar from "./AdminNavBar";
import AdminBlog from "./AdminPages/AdminBlog";
import AdminGallery from "./AdminPages/AdminGallery";
import AdminHistory from "./AdminPages/AdminHistory";
import AdminHome from "./AdminPages/AdminHome";
import { AuthContext } from "./AdminPages/Login/AuthContext";
import Login from "./AdminPages/Login/Login";

const AdminRouter = () => {
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const RequireAuth = ({ children }) => {
    return isAuthenticated ? children : <Login />;
  };
  return (
    <>
      <Router>
        <div className="AdminsideBar">
          <AdminNavBar />
        </div>
        <div className="mainContent">
          {/* if successfully logged in show the following */}
          <RequireAuth>
            <Switch>
              <Route path="/Admin" exact>
                <AdminHome />
              </Route>
              <Route path="/Admin/AdminHome">
                <AdminHome />
              </Route>
              <Route path="/Admin/AdminGallery">
                <AdminGallery />
              </Route>
              <Route path="/Admin/AdminHistory">
                <AdminHistory />
              </Route>
              <Route path="/Admin/AdminBlog">
                <AdminBlog />
              </Route>
            </Switch>
          </RequireAuth>
        </div>
      </Router>
    </>
  );
};

export default AdminRouter;
