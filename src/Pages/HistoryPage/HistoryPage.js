import React from "react";
import { Helmet } from "react-helmet";
import History from "../../Components/HistoryComponents/History";
import "./HistoryPage.css";
function HistoryPage() {
  return (
    <>
      <div className="historyContainer">
        <Helmet>
          <base />
          <title>History of Khangkhui Phungdhar</title>
          <meta
            name="description"
            content="check out the History of Khangkhui Phungdhar"
          />

          <meta property="og:title" content="History of Khangkhui Phungdhar" />
          <meta
            property="og:description"
            content="check out the History of Khangkhui Phungdhar"
          />
          <meta
            property="og:image"
            content="https://scontent.fgau3-1.fna.fbcdn.net/v/t31.18172-8/26114299_2127595117494964_1517657411031770738_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=HDTctLBIVZIAX9M_ssT&_nc_ht=scontent.fgau3-1.fna&oh=52872fdda8f3389c14c4061c6b198323&oe=614D82E3"
          />
          <meta
            property="og:url"
            content="//khangkhuiphungdhar.netlify.app/history"
          />
          <meta
            name="twitter:title"
            content="History of Khangkhui Phungdhar "
          />
          <meta
            name="twitter:description"
            content="check out the History of Khangkhui Phungdhar"
          />
          <meta
            name="twitter:image"
            content="https://scontent.fgau3-1.fna.fbcdn.net/v/t31.18172-8/26114299_2127595117494964_1517657411031770738_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=HDTctLBIVZIAX9M_ssT&_nc_ht=scontent.fgau3-1.fna&oh=52872fdda8f3389c14c4061c6b198323&oe=614D82E3"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@chipui" />
          <link rel="canonical" href="//khangkhuiphungdhar.netlify.app" />
        </Helmet>
        <History />
      </div>
    </>
  );
}

export default HistoryPage;
