// FinishOrder.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { InsertEmoticon, SentimentDissatisfied } from "@mui/icons-material";

import "./finishOrder.scss";
import { Navbar } from "../../components/navbar/Navbar";
import ProductsTable from "../../components/productsTable/ProductsTable";
import { ContactForm } from "../../components/contactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import FinishOrderForm from "../../components/finishOrderForm/FinishOrderForm";
import { GoBackButton } from "../../components/buttons/Buttons";

const FinishOrder = () => {
  const products = useSelector((state) => state.cart.products);
  const [verifyOrder, setVerifyOrder] = useState(true);

  //TODO: Dodělat logiku když se dokončí vyplnění formulátře a dokončit verifikaci že má číslo určitou délku
  const handleFormSubmit = (formData) => {
    // Add logic to send the form data to your email or server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="finishOrderWrap">
      {" "}
      <Navbar />
      <div className="finishOrderWrapper">
        {!verifyOrder && products.length > 0 && (
          <>
            <GoBackButton />
            <div data-aos="flip-right" data-aos-duration="800">
              <ProductsTable products={products} />
              <button
                className="verifyButton"
                onClick={() => setVerifyOrder(!verifyOrder)}
              >
                <CheckIcon
                  className="checkIcon"
                  sx={{ height: "34px", width: "34px" }}
                />
                Potvrdit košík a vyplnit kontaktní údaje
              </button>
            </div>
          </>
        )}

        {products.length === 0 && (
          <div data-aos="flip-up" data-aos-duration="800">
            {" "}
            <h2>
              Košík je prázdný. Pokud jste nenašli co hledáte, tak nám vpravo
              dole popište co hledáte v chatu, nebo zkuste znovu prohlédnout náš
              sortiment.
            </h2>
            <Link className="link" to="/products">
              <button className="verifyButton">
                <ArrowBackIcon
                  className="checkIcon"
                  sx={{ height: "34px", width: "34px" }}
                />
                Prohlédnout znovu sortiment{" "}
                <InsertEmoticon
                  className="checkIcon"
                  sx={{ height: "34px", width: "34px" }}
                />
              </button>
            </Link>
          </div>
        )}

        {verifyOrder && (
          <>
            <div
              className="backButton2"
              onClick={() => setVerifyOrder(!verifyOrder)}
            >
              <ArrowBackIcon className="backIcon" /> <span>Zpět</span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="800"
              className="finishForm"
            >
              <h2>Vyplňte prosím údaje níže</h2>
              <FinishOrderForm />
            </div>
          </>
        )}
      </div>
      <ContactForm isPopUp={true} />
      <Footer />
    </div>
  );
};

export default FinishOrder;
