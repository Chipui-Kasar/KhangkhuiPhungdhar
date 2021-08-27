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
          content="Khangkhui Phungdhar is a name of a village, it is located on the east of Ukhrul town. It is about 12Km from the town. One can reach the village easily on the vehicle or by foot. There is a beautiful mountain where people can visit and see the beautiful sunrise and sunset from the top of the mountain. The place is also known as Harva Khangai, The mountain where the second world war took place"
        />
        <meta
          name="keywords"
          content="khangkhui cave, khunou netlify, village, khullen, where cave located, lime caves, mangsor manipur ukhrul weather, website using restaurant, road imphal, news, rainfall, rto manipur, khullen khullen,, luira phanit 2020, concert, mayar ngala, ukhrul, khonayao, khonayao bodo song, live about district, map weather today, population dc town, sp, post office, how shirui lily known local dialect, found, why the a unique gift, lily, write picture who discovered hotel, festival, luingaini 2021, snowfall KhangkhuiKhunou, Khangkhui Khunou, Netlify khunou, phungdhar, ,khangkhui harva khangai, phungdhar khangai ukhurl ,ukhrul history, headman headman, village authority,"
        />
        <meta property="og:title" content="Khangkhui Phungdhar Official Site" />
        <meta
          property="og:description"
          content="Khangkhui Phungdhar is a name of a village, it is located on the east of Ukhrul town. It is about 12Km from the town. One can reach the village easily on the vehicle or by foot. There is a beautiful mountain where people can visit and see the beautiful sunrise and sunset from the top of the mountain. The place is also known as Harva Khangai, The mountain where the second world war took place"
        />
        <meta
          property="og:image"
          content="https://scontent.fgau3-1.fna.fbcdn.net/v/t31.18172-8/26114299_2127595117494964_1517657411031770738_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=HDTctLBIVZIAX9M_ssT&_nc_ht=scontent.fgau3-1.fna&oh=52872fdda8f3389c14c4061c6b198323&oe=614D82E3"
        />
        <meta property="og:url" content="//khangkhuiphungdhar.netlify.app" />
        <meta
          name="twitter:title"
          content="Khangkhui Phungdhar Official Site "
        />
        <meta
          name="twitter:description"
          content="Khangkhui Phungdhar is a name of a village, it is located on the east of Ukhrul town. It is about 12Km from the town. One can reach the village easily on the vehicle or by foot. There is a beautiful mountain where people can visit and see the beautiful sunrise and sunset from the top of the mountain. The place is also known as Harva Khangai, The mountain where the second world war took place."
        />
        <meta
          name="twitter:image"
          content="https://scontent.fgau3-1.fna.fbcdn.net/v/t31.18172-8/26114299_2127595117494964_1517657411031770738_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=HDTctLBIVZIAX9M_ssT&_nc_ht=scontent.fgau3-1.fna&oh=52872fdda8f3389c14c4061c6b198323&oe=614D82E3"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chipui" />
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
