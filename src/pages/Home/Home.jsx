import React from "react";
import "./home.scss";
import { Hero } from "../../components/hero/Hero";
import { Navbar } from "../../components/navbar/Navbar";
import { ContactForm } from "../../components/contactForm/ContactForm";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="homeWrap">
        <Navbar />
        <Hero />
        <ContactForm />
      </div>
    </>
  );
}
