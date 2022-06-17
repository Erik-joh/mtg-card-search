import React from "react";
import {
  GeneratedCardContainer,
  GCardHeader,
  GCardImage,
  GCardDescription,
  GCardPT,
} from "../pages/ResultsPage/styles";

const GeneratedCard = ({ generatedCard }) => {
  const { cardName, cardType, cmc, description, power, toughness, imageUrl } =
    generatedCard;
  return (
    <GeneratedCardContainer>
      <GCardHeader>
        <p>{cardName}</p>
        <p>{cmc}</p>
      </GCardHeader>
      <GCardImage>
        <img src={imageUrl} alt={cardName} />
      </GCardImage>
      <GCardHeader>
        <p>{cardType}</p>
      </GCardHeader>
      <GCardDescription>
        <p>{description}</p>
        <GCardPT>
          {power}/{toughness}
        </GCardPT>
      </GCardDescription>
    </GeneratedCardContainer>
  );
};
export default GeneratedCard;
