import React from "react";
import { LoadingContainer } from "../pages/ResultsPage/styles";
import colorsIcon from "../../icons/colors-wheel.png";

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={colorsIcon} alt="magic the gathering colors" />
    </LoadingContainer>
  );
};
export default Loading;
