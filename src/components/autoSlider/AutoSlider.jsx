import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./autoSlider.scss";

export const AutoSlider = () => {
  const autoslideData = [
    {
      id: 1,
      fileName: "categoryHotel.mp4",
      text: "Hotelů, kin a kulturních domů",
      href: "hotel",
    },
    {
      id: 2,
      fileName: "categoryDentist.mp4",
      text: "Zubních ordinací a nemocnic",
      href: "zdravotnictvi",
    },
    {
      id: 3,
      fileName: "categoryMicroscope.mp4",
      text: "Mikroskopů a laryngoskopů",
      href: "mikroskop",
    },

    {
      id: 4,
      fileName: "categoryIndustry.mp4",
      text: "Průmyslu a halových prostorů",
      href: "průmysl",
    },
    {
      id: 5,
      fileName: "categoryUV.mp4",
      text: "Sterilizátorů, zoo a veterinářství",
      href: "UV",
    },
    {
      id: 6,
      fileName: "categorySignal.mp4",
      text: "signální techniky",
      href: "signal",
    },
    // {
    //   id: 7,
    //   fileName: "categoryParty.mp4",
    //   text: "zábavního průmyslu",
    //   href: "party",
    // },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % autoslideData.length);
    }, 4200); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="auto-slider">  data-aos="zoom-out" data-aos-duration="1000"
    <div className="auto-slider">
      {autoslideData.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <video
            loading="lazy"
            autoPlay
            loop
            muted
            className="background-video"
          >
            <source
              src={require(`../../media/videos/${slide.fileName}`)}
              type="video/mp4"
            />
          </video>
          <div className="content">
            <div
              className="contentText"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <h1>Dodáváme již přes 25 let světelné zdroje do:</h1>{" "}
              <h2>{slide.text}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
