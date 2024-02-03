import React from "react";
import "./carouselHorizontal.scss";

const images = [
  { name: "angenieux.png" },
  { name: "bailey.jpg" },
  { name: "boehm.png" },
  { name: "calex.png" },
  { name: "faneurope.png" },
  { name: "fisher.png" },
  { name: "gelighting.webp" },
  { name: "hitachi.png" },
  { name: "iwasaki.png" },
  { name: "narva.png" },
  { name: "orbitec.jpg" },
  { name: "osram.png" },
  { name: "panasonic.png" },
  { name: "penlon.png" },
  { name: "philips.png" },
  { name: "relco.png" },
  { name: "sylvania.png" },
  { name: "toshiba.png" },
  { name: "tridonic.jpg" },
  { name: "ushio.png" },
  { name: "uvetta.png" },
];

export const CarouselHorizontal = () => {
  return (
    <div
      className="carousel-container"
      
    >
      <div className="carousel-row">
        {images.map((image, index) => (
          <img
            key={index + images.length}
            src={require(`../../media/logos/${image.name}`)}
          />
        ))}
      </div>
    </div>
  );
};
