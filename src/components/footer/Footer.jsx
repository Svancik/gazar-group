import React from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./footer.scss"; // Replace 'YourComponent' with your component name
import { LocationOn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="middleSection">
        <div className="map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405320.7333300449!2d14.091439245579884!3d50.55658281272435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709b086cfbf88c3%3A0x8c8068615ad746b8!2sLitom%C4%9B%C5%99ice!5e0!3m2!1sen!2scz!4v1640902431808!5m2!1sen!2scz&zoom=10"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen="true"
            loading="lazy"
          ></iframe>
        </div>
        <div className="company-data" id="contact">
          <div className="company-name">Gazar Group</div>
          <div className="row">
            <div className="iconWrap">
              <LocationOnIcon className="icon" />
            </div>
            <span> Liškova 1770/64, Předměstí, 412 01 Litoměřice.</span>
          </div>

          <div className="row">
            <div className="iconWrap">
              <MailIcon className="icon" />
            </div>
            <span>Mail: info@gazargroup.com</span>
          </div>

          <div className="row">
            <div className="iconWrap">
              <PhoneIcon className="icon" />
            </div>
            <span>Telefon: +702 050 899</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
