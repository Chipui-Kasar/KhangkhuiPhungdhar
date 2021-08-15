import React from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeFounder from "../../Components/HomeFounder/HomeFounder";
import HomeVA from "../../Components/HomeVA/HomeVA";
import HomeAboutPlaces from "../../Components/HomeAboutPlaces/HomeAboutPlaces";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div>
        <HomeBanner />
        <div className="container-fluid marketing">
          <HomeFounder />
          <HomeVA />
          <HomeAboutPlaces />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
