import React from "react";
import {
  GeneratedCardContainer,
  GCardHeader,
  GCardImage,
  GCardDescription,
  GCardPT,
  NoImage,
} from "../pages/ResultsPage/styles";
import noImage from "../../icons/no-image.png";

const GeneratedCard = ({ generatedCard, imageUrl }) => {
  const { cardName, cardType, cmc, description, power, toughness } =
    generatedCard;
  const image = imageUrl !== "" ? imageUrl : noImage;
  return (
    <GeneratedCardContainer>
      <GCardHeader>
        <p>{cardName}</p>
        <p>{cmc}</p>
      </GCardHeader>
      {imageUrl !== "" ? (
        <GCardImage>
          <img src={image} alt={cardName} />
        </GCardImage>
      ) : (
        <NoImage>
          <img src={noImage} alt="Default" />
        </NoImage>
      )}
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
