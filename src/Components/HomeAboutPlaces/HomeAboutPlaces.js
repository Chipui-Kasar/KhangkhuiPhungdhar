import React, { useEffect } from "react";
import "./HomeAboutPlaces.css";
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
      <p className="float-right text-white">
        <a href="#">⬆ Back to top </a>
      </p>
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
          <div className="col-lg-5 place-image  pb-5 " data-aos="flip-left">
            <img
              src="https://cdn.cdnparenting.com/articles/2018/08/602444213-H.jpg"
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
              level. One can view the beautiful sunrise from the top of the
              mountain. From the hill top of Harva Khangai one can behold the
              scenic view of Ningthi River, Myanmar, Angoching Range, Ukhrul
              town, Khayang Phungtha water falls, Shiroy mountain and beautiful
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
            className="col-lg-5 place-image pb-5 mb-lg-5 mb-sm-3"
            data-aos="zoom-in"
          >
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607655600-5776.jpg"
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
              on the northern side of Khangkhui Khunou. It is about 6Km from the
              village. It is a great place to settle down and start a new life.
              Life is short, so enjoy while you're still young. There are lots
              of cattle and wild animals on the mountain. Right before reaching
              the mountain(foothill of the mountain) there is a small pond,
              where, if someone happens to call the name of the pond, he/she
              gets blind mind and changes his eyesight and sees different
              things. Upon going forward towards Northern side there is a
              beautiful mountain where most of the people loves to visit i,e.
              Shirui Hills. The Water of Khangkhui Phungdhar started from the
              narrow mountain of Khorim. So it is also considered as the ura of
              Khangkhui
            </p>
          </div>
          <div className="col-lg-5 place-image pb-5">
            <img
              src="https://www.bmc-switzerland.com/media/catalog/category/BMC_Parent_Category_Header_Image_Mountain_All_Mountain_1.jpg"
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
      <hr className="featurette-divider" />
    </>
  );
}

export default HomeAboutPlaces;