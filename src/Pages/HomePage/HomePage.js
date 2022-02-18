import React, { useEffect } from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeFounder from "../../Components/HomeFounder/HomeFounder";
import HomeVA from "../../Components/HomeVA/HomeVA";
import HomeAboutPlaces from "../../Components/HomeAboutPlaces/HomeAboutPlaces";
import previewImage from "../../images/Home/preview.jpg";
import "./HomePage.css";
import { Helmet } from "react-helmet";
import ReachUs from "../../Components/ReachUs/ReachUs";
import GoogleAds from "../GoogleAds/GoogleAds";


function HomePage() {
  useEffect(() => {
    <GoogleAds />
  }, []);
  return (
    <div>

      <Helmet>
        <base />
        <title>Khangkhui Phungdhar Official Site</title>
        <meta
          name="title"
          content="Khangkhui Phungdhar is a name of a village, it is located on the east of Ukhrul town. It is about 12Km from the town. One can reach the village easily on the vehicle or by foot. There is a beautiful mountain where people can visit and see the beautiful sunrise and sunset from the top of the mountain. The place is also known as Harva Khangai, The mountain where the second world war took place"
        />
        <meta
          name="description"
          content="Khangkhui Phungdhar is a name of a village, it is located on the east of Ukhrul town. It is about 12Km from the town. One can reach the village easily on the vehicle or by foot. There is a beautiful mountain where people can visit and see the beautiful sunrise and sunset from the top of the mountain. The place is also known as Harva Khangai, The mountain where the second world war took place"
        />
        <meta
          name="keywords"
          content="khangkhui cave, khunou netlify, village, khullen, where cave located, lime caves, mangsor manipur ukhrul weather, website using restaurant, road imphal, news, rainfall, rto manipur, khullen khullen,, luira phanit 2020, concert, mayar ngala, ukhrul, khonayao, khonayao bodo song, live about district, map weather today, population dc town, sp, post office, how shirui lily known local dialect, found, why the a unique gift, lily, write picture who discovered hotel, festival, luingaini 2021, snowfall KhangkhuiKhunou, Khangkhui Khunou, Netlify khunou, phungdhar, ,khangkhui harva khangai, phungdhar khangai ukhurl ,ukhrul history, headman headman, village authority,"
        />
        <meta
          property="og:title"
          content="Khangkhui Phungdhar Official Site"
          data-rh="true"
        />
        <meta
          property="og:description"
          content="Khangkhui Phungdhar is a name of a village, it is located on the east of Ukhrul town. It is about 12Km from the town. One can reach the village easily on the vehicle or by foot. There is a beautiful mountain where people can visit and see the beautiful sunrise and sunset from the top of the mountain. The place is also known as Harva Khangai, The mountain where the second world war took place"
          data-rh="true"
        />
        <meta property="og:image" content={previewImage} data-rh="true" />
        <meta
          property="og:url"
          content="//khangkhuiphungdhar.netlify.app"
          data-rh="true"
        />
        <meta
          name="twitter:title"
          content="Khangkhui Phungdhar Official Site "
          data-rh="true"
        />
        <meta
          name="twitter:description"
          content="Khangkhui Phungdhar is a name of a village, it is located on the east of Ukhrul town. It is about 12Km from the town. One can reach the village easily on the vehicle or by foot. There is a beautiful mountain where people can visit and see the beautiful sunrise and sunset from the top of the mountain. The place is also known as Harva Khangai, The mountain where the second world war took place."
          data-rh="true"
        />
        <meta name="twitter:image" content={previewImage} data-rh="true" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chipui" />
        <link rel="canonical" href="https://khangkhuiphungdhar.netlify.app" />
        <GoogleAds />
      </Helmet>

      <HomeBanner />
      <div className="container-fluid marketing">
        <HomeFounder />
        <HomeVA />
        <HomeAboutPlaces />
      </div>
      <ReachUs />
    </div>
  );
}

export default HomePage;
