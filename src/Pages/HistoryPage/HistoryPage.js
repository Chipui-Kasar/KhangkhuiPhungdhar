import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import History from "../../Components/HistoryComponents/History";
import ReachUs from "../../Components/ReachUs/ReachUs";
import GoogleAds from "../GoogleAds/GoogleAds";
import "./HistoryPage.css";
function HistoryPage() {
  useEffect(() => {
    <GoogleAds />
  }, []);
  return (
    <>
      <div className="historyContainer">
        <Helmet>
          <base />
          <GoogleAds />
          <title>History of Khangkhui Phungdhar</title>
          <meta
            name="description"
            content="check out the History of Khangkhui Phungdhar"
          />
          <meta
            name="title"
            content="Check out the History of Khangkhui Phungdhar"
          />
          <meta
            property="og:title"
            content="History of Khangkhui Phungdhar"
            data-rh="true"
          />
          <meta
            property="og:description"
            content="check out the History of Khangkhui Phungdhar"
            data-rh="true"
          />
          <meta
            property="og:image"
            content="//leverageedu.com/blog/wp-content/uploads/2019/09/BA-History.png"
            data-rh="true"
          />
          <meta
            property="og:url"
            content="//khangkhuiphungdhar.netlify.app/history"
            data-rh="true"
          />
          <meta
            name="twitter:title"
            content="History of Khangkhui Phungdhar "
            data-rh="true"
          />
          <meta
            name="twitter:description"
            content="check out the History of Khangkhui Phungdhar"
            data-rh="true"
          />
          <meta
            name="twitter:image"
            content="//leverageedu.com/blog/wp-content/uploads/2019/09/BA-History.png"
            data-rh="true"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@chipui" />
          <link
            rel="canonical"
            href="https://khangkhuiphungdhar.netlify.app/history"
          />
        </Helmet>
        <History />
        <ReachUs />
      </div>
    </>
  );
}

export default React.memo(HistoryPage);
