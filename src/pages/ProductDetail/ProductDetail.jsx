import React, { useEffect, useState } from "react";
import "./productDetail.scss";
import { Navbar } from "./../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { ProductItemDetails } from "../../components/productItemDetails/ProductItemDetails";
import { ContactForm } from "../../components/contactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import { products } from "./../../ps_products";

export const ProductDetail = () => {
  //načtení id z URL
  const productId = useLocation().pathname.split("/")[2].toString();
  //nalezení produktu na základě id
  const product = products.filter(
    (p) => p.id_product.toString() === productId
  )[0];
  console.log(product);

  return (
    <div className="productDetailWrapper">
      <Navbar />
   
      <ProductItemDetails product={product} />
      <ContactForm isPopUp={true} />
      <Footer />
    </div>
  );
};
