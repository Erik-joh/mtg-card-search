import React from "react";
import Card from "../molecules/Card";
import Button from "../atoms/Button";
import { CardsCarouselContainer } from "../pages/ResultsPage/styles";

const CardsCarousel = ({ cards }) => {
  return (
    <CardsCarouselContainer>
      <div>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              cardName={card.name}
              imageUrl={card.image_uris ? card.image_uris.normal : ""}
            />
          );
        })}
      </div>
      <Button buttonText="<" />
      <p>
        {0}/{cards.length}
      </p>
      <Button buttonText=">" />
    </CardsCarouselContainer>
  );
};
export default CardsCarousel;
