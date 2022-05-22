import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Admin.css";
import AdminNavBar from "./AdminNavBar";
import AdminBlog from "./AdminPages/AdminBlog";
import AdminGallery from "./AdminPages/AdminGallery";
import AdminHistory from "./AdminPages/AdminHistory";
import AdminHome from "./AdminPages/AdminHome";
import Login from "./AdminPages/Login/Login";

const AdminRouter = () => {
  const [loginStatus, setLoginStatus] = React.useState(false);

  const RequireAuth = ({ children }) => {
    return loginStatus ? children : <Login setLoginStatus={setLoginStatus} />;
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
