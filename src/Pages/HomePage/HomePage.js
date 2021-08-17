import React from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeFounder from "../../Components/HomeFounder/HomeFounder";
import HomeVA from "../../Components/HomeVA/HomeVA";
import HomeAboutPlaces from "../../Components/HomeAboutPlaces/HomeAboutPlaces";
import "./HomePage.css";

function HomePage(props) {
  const visit = props.visits; //from App.js
  return (
    <div>
      <HomeBanner visit={visit} />
      <div className="container-fluid marketing">
        <HomeFounder />
        <HomeVA />
        <HomeAboutPlaces />
      </div>
    </div>
  );
}

export default HomePage;
