import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import ReachUs from "./Components/ReachUs/ReachUs";
import BlogPage from "./Pages/BlogPage/BlogPage";

function App() {
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
        </Switch>
        <ReachUs />
      </Router>
    </>
  );
}

export default App;
