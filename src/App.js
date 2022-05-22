import "./App.css";
import React, { useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
//import ReachUs from "./Components/ReachUs/ReachUs";
import BlogPage from "./Pages/BlogPage/BlogPage";
import MYCPage from "./Pages/MYCPage/MYCPage";
// import countapi from "countapi-js";
import Admin from "./Pages/Admin/Admin";
import ReadFullBlog from "./Components/BlogComponent/ReadFullBlog";
import WishPage from "./Pages/WishingPage/WishPage";
import Donate from "./Components/ReachUs/Donate/Donate";
import GoogleAds from "./Pages/GoogleAds/GoogleAds";

function App() {
  // const [visit, setVisit] = useState();
  // useEffect(() => {
  //   countapi.visits("khangkhuiphungdhar.netlify.app").then(result => {
  //     setVisit(result.value);
  //   });
  // }, []);
  useEffect(() => {
    <GoogleAds />;
  }, []);
  //on componentdidupdate, check the url again

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
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
          <Route path="/read/:id" component={ReadFullBlog} />
          <Route path="/ura">
            <MYCPage />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/wish" component={WishPage} />
          <Route path="/donate" component={Donate} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
