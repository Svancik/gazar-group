import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./buttons.scss";

export const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This is equivalent to history.goBack()
  };

  return (
    <div className="backButton" onClick={goBack}>
      <ArrowBackIcon className="backIcon" /> <span>Zpět</span>
    </div>
  );
};
