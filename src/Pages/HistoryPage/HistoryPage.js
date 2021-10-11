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
          <meta
            name="title"
            content="Check out the History of Khangkhui Phungdhar"
          />
          <meta property="og:title" content="History of Khangkhui Phungdhar" />
          <meta
            property="og:description"
            content="check out the History of Khangkhui Phungdhar"
          />
          <meta
            property="og:image"
            content="//leverageedu.com/blog/wp-content/uploads/2019/09/BA-History.png"
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
            content="//leverageedu.com/blog/wp-content/uploads/2019/09/BA-History.png"
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

export default React.memo(HistoryPage);
