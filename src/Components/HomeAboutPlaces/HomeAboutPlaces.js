import React, { useEffect } from "react";
import "./HomeAboutPlaces.css";
import khorim from "../../images/Home/khorim.jpeg";
import harvaplace from "../../images/Home/harvaplace.jpeg";
//import khangkhui from "../../images/Home/khangkhui.jpeg";

import AOS from "aos";
function HomeAboutPlaces() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <hr className="featurette-divider" id="aboutkhangkhui" />

      <div className="container">
        <div className="row featurette " data-aos="flip-down">
          <div className="col-lg-7" data-aos="fade-down">
            <h2 className="featurette-heading">About Khangkhui Phungdhar. </h2>
            <p className="content">
              Khangkhui Phungdhar is a Tangkhul Naga village in the
              North-eastern part of Ukhrul district of Manipur, India. The
              village is about 16 kilometer from Ukhrul District headquarters.
              The village is flanked by Choithar in the west, Khangkhui Khullen
              & Nungshong in the south, Pushing in the east and Langdang and
              Shirui in the north. Currently there are more than 200 households
              with more than 1000 people in the village. The approx area is
              about 100sq Km.
              <br />
              Cabbage, Potato etc are the main resources of this village. There
              is abundantly free flowing of water which is taken out from the
              narrow mountain of '<b>KHORIM</b>' (Local dialect of Khangkhui,
              place of beautiful mountain which lies on the Northern side).
              Moreover, we can find lots of wild apple during September -
              October.
              <br />
            </p>
          </div>
          <div className="col-lg-5 place-image   " data-aos="flip-left">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/file%2FKHANGKHUI%20PHUNGDHAR.jpg%20on%2010-Dec-2021,%2021:12:14?alt=media&token=d5aac0ce-0878-41c7-a800-3b09d4aeef5e"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              alt="Khangkhui Phungdhar"
              height="500"
              focusable="false"
              aria-label="Placeholder: 500x500"
            />
          </div>
        </div>

        <hr className="featurette-divider" id="harvakhangai" />

        <div className="row featurette" data-aos="fade-down">
          <div className="col-lg-7">
            <h2 className="featurette-heading">Harva Khangai</h2>
            <p className="content">
              Khangkhui Phungdhar Harva Khangai Kaphung lies on East of Ukhrul
              town and about 20 km distance and is about 2000 meters above sea
              level. It is well known for its beautiful spot for both sunrise
              and sunset, as watching first rays of the sun is an experience
              that is quite something else. It is also one of the battle spot of
              World War II. From the hill top of Harva Khangai one can behold
              the scenic view of Ningthi River, Myanmar, Angoching Range, Ukhrul
              town, Khayang Phungtha water falls, Shirui mountain and beautiful
              view of the Imphal Valley. Harva Khangai Kaphung is a beautiful
              plateau which has great potential for tourist attraction. It could
              be well said that Harva Khangai is a hidden treasure of not only
              for the Veikhang villages but for the general public of various
              communities as well. As such the exploration, adventurous and
              enlightening expedition is initiated as an endevour to properly
              highlight the importance of the small hill lock of Harva Khangai
              Kaphung. Mr. Suisa (MP member) has once said about the thick
              forest of Harva Khangai Kaphung
            </p>
          </div>
          <div
            className="col-lg-5 place-image mb-lg-5 mb-sm-3"
            data-aos="zoom-in"
          >
            <img
              src={harvaplace}
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              alt="Harva Khangai"
              focusable="false"
              aria-label="Placeholder: 500x500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette " data-aos="flip-up">
          <div className="col-lg-7">
            <h2 className="featurette-heading">Khorim (Khuirung)</h2>
            <p className="content">
              Khorim is also known as Khuirung in local dialect. It is located
              on the northern side of Khangkhui Phungdhar. It is about 6Km from
              the village. It is a great place to settle down and start a new
              life. Life is short, so enjoy while you're still young. There are
              lots of cattle and wild animals on the mountain. The Water of
              Khangkhui Phungdhar started from the narrow mountain of Khorim. So
              it is also considered as the ura of Khangkhui. Upon going forward
              towards Northern side, there is a beautiful mountain where most of
              the people loves to visit i,e. Shirui Hills.
            </p>
          </div>
          <div className="col-lg-5 place-image " data-aos="flip-up">
            <img
              src={khorim}
              alt="Khorim"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              focusable="false"
              aria-label="Placeholder: 500x500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(HomeAboutPlaces);
