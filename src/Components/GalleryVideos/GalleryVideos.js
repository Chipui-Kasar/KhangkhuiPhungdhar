// import React from "react";
// import Videos from "../../AllData.json";

// function GalleryVideos() {
//   const loadMore = () => {
//     alert("You'll be redirect to YouTube");
//   };

//   return (
//     <>
//       <div className="row">
//         {Videos ? (
//           Videos.DisplayVideo.map((video, key) => {
//             return (
//               <div className="col-md-4" key={key}>
//                 <div className="card mb-4 shadow-lg">
//                   <iframe
//                     width="100%"
//                     height="200"
//                     loading="auto"
//                     src={video.src}
//                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     title={video.title}
//                     style={{
//                       border: "7px solid #424242",
//                       borderRadius: "7px",
//                     }}
//                   ></iframe>

//                   <div className="card-body">
//                     <p>
//                       <i className="fa fa-calendar"></i> : {video.pubDate}
//                     </p>
//                     <p className="card-text font-weight-bold">
//                       <i className="fa fa-chain"></i> : {video.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <i className="fa fa-cog fa-spin"></i>
//         )}
//       </div>

//       <div className="text-center">
//         <button className="btn btn-dark btn-lg" onClick={loadMore}>
//           <a
//             href="https://www.youtube.com/watch?v=Gxi5XZZF3no&list=PLaDHq514e-p0MYI-5qBwAPqMmf3ISUWT8&index=10&ab_channel=LookslikeYou"
//             target="_child"
//             style={{ textDecoration: "none" }}
//           >
//             Watch More Videos on YouTube <i className="fa fa-youtube-play"></i>
//           </a>
//         </button>
//       </div>
//     </>
//   );
// }

// export default GalleryVideos;

//Npm summary playlist

import React, { useEffect, useState } from "react";
// import Videos from "../../AllData.json";

function GalleryVideos() {
  const [video, setVideo] = useState([]);
  // const [spinner, setSpinner] = useState(true);
  //AIzaSyCVGBklLLNd-0tTrFJQIxo4Uw6zro9dQ9k
  useEffect(() => {
    // setTimeout(() => setSpinner(false), 1000);
    const PlaylistSummary = require("youtube-playlist-summary");
    const config = {
      GOOGLE_API_KEY: "AIzaSyCVGBklLLNd-0tTrFJQIxo4Uw6zro9dQ9k", // require
      // PLAYLIST_ITEM_KEY: [
      //   "publishedAt",
      //   "title",
      //   "description",
      //   "videoId",
      //   "videoUrl",
      // ], // option
    };

    const ps = new PlaylistSummary(config);
    // const CHANNEL_ID = "UCvBqqCFE7JDsHWK8wDWnkYA";
    const PLAY_LIST_ID = "PLaDHq514e-p2ibGvlBG2a3jY1IsMNPVOB";

    ps.getPlaylistItems(PLAY_LIST_ID)
      .then(result => {
        console.log(result);
        setVideo(result.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const loadMore = () => {
    alert("You'll be redirect to YouTube");
  };

  return (
    <>
      <div className="row">
        {video ? (
          video.map((video, key) => {
            return (
              <div className="col-md-4" key={key}>
                <div className="card mb-4 shadow-lg">
                  {/* <iframe
                    width="100%"
                    height="200"
                    loading="lazy"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                    style={{
                      border: "7px solid #424242",
                      borderRadius: "7px",
                    }}
                  ></iframe> */}
                  <embed
                    loading="lazy"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    width="100%"
                    height="200px"
                    title={video.title}
                    style={{
                      border: "7px solid #424242",
                      borderRadius: "7px",
                    }}
                  />

                  <div className="card-body">
                    <p>
                      <i className="fa fa-calendar"></i> : {video.publishedAt}
                    </p>
                    <p className="card-text font-weight-bold">
                      <i className="fa fa-chain"></i> : {video.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <i className="fa fa-cog fa-spin"></i>
        )}
      </div>

      <div className="text-center">
        <button className="btn btn-dark btn-lg" onClick={loadMore}>
          <a
            href="https://www.youtube.com/watch?v=Gxi5XZZF3no&list=PLaDHq514e-p0MYI-5qBwAPqMmf3ISUWT8&index=10&ab_channel=LookslikeYou"
            target="_child"
            style={{ textDecoration: "none" }}
          >
            Watch More Videos on YouTube <i className="fa fa-youtube-play"></i>
          </a>
        </button>
      </div>
    </>
  );
}

export default GalleryVideos;
