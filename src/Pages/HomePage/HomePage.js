import React from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeFounder from "../../Components/HomeFounder/HomeFounder";
import HomeVA from "../../Components/HomeVA/HomeVA";
import HomeAboutPlaces from "../../Components/HomeAboutPlaces/HomeAboutPlaces";
import "./HomePage.css";
import { Helmet } from "react-helmet";

function HomePage(props) {
  const visit = props.visits; //from App.js
  return (
    <div>
      <Helmet>
        <base />
        <title>Khangkhui Phungdhar Official Site</title>
        <meta
          name="description"
          content="Coming together is a beginning. Keeping together is progress. Working together is success."
        />
        <meta
          name="title"
          content="Best place to visit in Khangkhui Khunou, Ukhrul : Khangkhui Khunou harva khangai "
        />
        <meta
          name="description"
          content="Khangkhui Phungdhar is a name of a village, it is located on the east of Ukhrul town. It is about 12Km from the town. One can reach the village easily on the vehicle or by foot. There is a beautiful mountain where people can visit and see the beautiful sunrise and sunset from the top of the mountain. The place is also known as Harva Khangai, The mountain where the second world war took place"
        />
        <meta
          name="keywords"
          content="khangkhui cave, khunou netlify, village, khullen, where cave located, lime caves, mangsor manipur ukhrul weather, website using restaurant, road imphal, news, rainfall, rto manipur, khullen khullen,, luira phanit 2020, concert, mayar ngala, ukhrul, khonayao, khonayao bodo song, live about district, map weather today, population dc town, sp, post office, how shirui lily known local dialect, found, why the a unique gift, lily, write picture who discovered hotel, festival, luingaini 2021, snowfall KhangkhuiKhunou, Khangkhui Khunou, Netlify khunou, phungdhar, ,khangkhui harva khangai, phungdhar khangai ukhurl ,ukhrul history, headman headman, village authority,"
        />
        <link rel="canonical" href="//khangkhuiphungdhar.netlify.app" />
      </Helmet>
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
