import React from "react";
import "./termsAndConditions.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { TermsAndConditionsInfo } from "../../components/termsAndConditionsInfo/TermsAndConditionsInfo";
import Footer from "./../../components/footer/Footer";
import { GoBackButton } from "../../components/buttons/Buttons";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const TermsAndConditions = () => {
  return (
    <div className="termsAndConditionsWrapper">
      <Navbar />
      <GoBackButton />
      <TermsAndConditionsInfo />
      <ContactForm isPopUp={true} />
      <Footer />
    </div>
  );
};
