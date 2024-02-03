import React from "react";
import "./infoPanel.scss";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const InfoPanel = () => {
  return (
    <div
      className="infoPanelWrapper"
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      <div className="left">
        <div className="column">
          <div className="row">
            <div className="iconWrap">
              <HandshakeIcon className="icon" />
            </div>
            <span>Jsme zárukou spolehlivého obchodu již přes 25 let.</span>
          </div>
        </div>
        <div className="column">
          <div className="row">
            <div className="iconWrap">
              <PhoneIcon className="icon" />
            </div>
            <span>Zavolejte nám na číslo 702 050 899, jsme tu pro vás.</span>
          </div>
        </div>
        <div className="column">
          <div className="row">
            <div className="iconWrap">
              <EmailIcon className="icon" />
            </div>
            <span>
              Nenašli jste co hledáte? Napište nám na info@gazargroup.cz
            </span>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};
