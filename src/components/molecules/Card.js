import React from "react";
import { CardContainer } from "../pages/ResultsPage/styles";

const Card = ({ imageUrl, cardName }) => {
  return (
    <CardContainer>
      <img src={imageUrl} alt={cardName} />
    </CardContainer>
  );
};
export default Card;
