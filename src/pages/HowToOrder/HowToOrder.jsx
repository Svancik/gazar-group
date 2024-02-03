import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { HowToOrderInfo } from "../../components/howToOrderInfo/HowToOrderInfo";
import Footer from "../../components/footer/Footer";
import "./howToOrder.scss";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { GoBackButton } from "../../components/buttons/Buttons";

export const HowToOrder = () => {
  return (
    <div className="howToOrderWrap">
      <Navbar />
      <GoBackButton />
      <HowToOrderInfo data-aos="zoom-in" data-aos-duration="1000" />
      <ContactForm isPopUp={true} />
      <Footer />
    </div>
  );
};
