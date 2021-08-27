import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import ReachUs from "./Components/ReachUs/ReachUs";
import BlogPage from "./Pages/BlogPage/BlogPage";
import MYCPage from "./Pages/MYCPage/MYCPage";
import countapi from "countapi-js";

function App() {
  const [visit, setVisit] = useState();
  useEffect(() => {
    countapi.visits("khangkhuiphungdhar.netlify.app").then(result => {
      setVisit(result.value);
    });
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage visits={visit} />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/history">
            <HistoryPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/myc">
            <MYCPage />
          </Route>
        </Switch>

        <ReachUs />
      </Router>
    </>
  );
}

export default App;
