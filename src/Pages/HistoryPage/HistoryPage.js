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
          <link rel="canonical" href="//khangkhuiphungdhar.netlify.app" />
        </Helmet>
        <History />
      </div>
    </>
  );
}

export default HistoryPage;
