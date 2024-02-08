import React from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import "./shopGuide.scss";

export const ShopGuide = () => {
  return (
    <div className="steps-container">
      <div className="step">
        <div className="step-number">1</div>
        <div className="step-text">
          Vyberte produkt pomocí filtru kategorie / textem
        </div>
      </div>
      <ArrowRightOutlinedIcon className="arrowIcon" />
      <div className="step">
        <div className="step-number">2</div>
        <div className="step-text">Přidejte do košíku</div>
      </div>
      <ArrowRightOutlinedIcon className="arrowIcon" />
      <div className="step">
        <div className="step-number">3</div>
        <div className="step-text">Potvrďte zboží v košíku</div>
      </div>
      <ArrowRightOutlinedIcon className="arrowIcon" />
      <div className="step">
        <div className="step-number">4</div>
        <div className="step-text">Vyplňte formulář</div>
      </div>
    </div>
  );
};
