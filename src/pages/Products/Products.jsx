import React, { useEffect, useState } from "react";
import "./products.scss";
import { Navbar } from "../../components/navbar/Navbar";
import ProductList from "../../components/productsList/ProductsList";
import { ContactForm } from "./../../components/contactForm/ContactForm";
import { AutoSlider } from "../../components/autoSlider/AutoSlider";
import { InfoPanel } from "../../components/infoPanel/InfoPanel";
import { CarouselHorizontal } from "../../components/carouselHorizontal/CarouselHorizontal";
import Footer from "../../components/footer/Footer";
import { products } from "../../ps_products";
import { manufacturers } from "./../../ps_manufacturer";
import { categories } from "../../ps_category";
import { descriptions } from "../../ps_descriptions";
import { ProductItem } from "../../components/productItem/ProductItem";
import { useLocation } from "react-router-dom";
import { resetCart } from "../../redux/cartReducer";
import { PopUpFinish } from "../../components/popUpFinish/PopUpFinish";
import { useDispatch } from "react-redux";

export const Products = () => {
  const orderIsFinised = "?orderFinished" === useLocation().search;
  const dispatch = useDispatch();
  orderIsFinised && dispatch(resetCart());

  return (
    <div
      className={
        orderIsFinised ? "productsWrap no-scroll" : "productsWrap scroll"
      }
    >
      <div className="productsWrap2">
        {orderIsFinised && <PopUpFinish />}
        <Navbar />
        <AutoSlider />
        <InfoPanel />
        <CarouselHorizontal  />
        <ProductList />
        <ContactForm isPopUp={true} />
        <Footer />
      </div>
    </div>
  );
};
