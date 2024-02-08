import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./hero.scss";

export const Hero = () => {
  return (
    <div className="heroWrap">
      <video
        className="videoElement"
        loop
        autoPlay
        muted
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        <source
          src={require(`../../media/videos/vlaknoZarovky.mp4`)}
          type="video/mp4"
        />
      </video>
      <div className="heroAboutWrapTitle">
        <h1 data-aos="fade-right" data-aos-duration="1800">
          GAZAR
        </h1>
        <h2 data-aos="fade-left" data-aos-duration="2000">
          GROUP
        </h2>
      </div>

      <div
        className="heroAboutWrapText"
        data-aos="zoom-in"
        data-aos-duration="1800"
      >
        <span>
          Dodáváme světelné zdroje firem:{" "}
          <i>
            Angenieux, Apollon, Bailey Electric, Baro, Baush&Lomb, BBT,
            Berchtold, BLV, Dr. Fischer Dr. Mach, EYE, General Eletric,
            Gowlland, Guerra, Hanaulux, Heine, Heraeus, Hitachi, Iwasaki,
            Keeler, Leuci, Lohuis, Martin, Mc Intosch, Narva, Olympus, Orbitec,
            ORC, Oshino lamp, Osram, Panasonic, Pentax, PerkinElmer, Philips,
            Radium, Sidel, Skylux, SLI, Storz, Sylvania, Tesla, Teslamp,
            Toschiba, Ushio, Venture Lighting, Welch Allyn, Wild, Wolf, Zeiss a
            další.{" "}
          </i>
        </span>
        <br /> <br />
        <span>
          Objednávky nebo poptávky i na typy světelných zdrojů neuvedených v
          našem internetovém obchodě lze uskutečnit i telefonicky na 702050899
          nebo email: info@gazargroup.cz
        </span>
        <br /> <br />
        <span>
          <b>
            Jestliže potřebujete jakoukoliv žárovku, kontaktujte nás, rádi Vám
            poradíme a Vy ušetříte čas.
          </b>{" "}
          Denně se vyrábějí nové typy žárovek a montují se zařízení s novým
          osvětlením. Dodáváme žárovky všech světových výrobců. Velké množství
          typů je běžně na skladě. Typy, které nejsou na skladě zabezpečujeme do
          jednoho měsíce
          <br />
          <br />
          <br />
        </span>
        <div className="heroAboutLinks">
          <div className="column">
            <div className="iconWrap">
              <LocationOnIcon className="icon" />
            </div>
            <span>ADRESA: Liškova 1770/64, Předměstí, 412 01 Litoměřice.</span>
          </div>
          <div className="column">
            <div className="iconWrap">
              <MailIcon className="icon" />
            </div>
            <span>MAIL: info@gazargroup.com</span>
          </div>
          <div className="column">
            <div className="iconWrap">
              <PhoneIcon className="icon" />
            </div>
            <span>TELEFON: +420 702 050 899</span>
          </div>
        </div>
      </div>
    </div>
  );
};
