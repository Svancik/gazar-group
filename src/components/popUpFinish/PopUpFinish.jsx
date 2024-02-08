import React from "react";
import "./popUpFinish.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

export const PopUpFinish = () => {
  return (
    <div className="orderFinished__backGroundWrapper">
      <div className="orderFinished__PopUpWrapper">
        <span className="icon-success">
          <CheckCircleIcon
            sx={{ width: "10%", height: "80%", margin: "0px", color: "green" }}
          />
        </span>
        <h1>Vaše poptávka byla dokončena!</h1>
        <span>Děkujeme za Vaši poptávku o cenovou nabídku! </span>
        <span>
          Na Vaší poptávce se právě pracuje a bude zpracována do 24 hodin a
          následně předána přepravní službě.{" "}
        </span>
        <span>Do emailu jsme Vám zaslali podrobnosti vaší poptávky. </span>

        <Link className="link" to="/products">
          <button className="continueShopping" type="submit" form="myform">
            ZPĚT DO OBCHODU
          </button>
        </Link>
      </div>
    </div>
  );
};
