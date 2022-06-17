import React from "react";
import Card from "../molecules/Card";
import Button from "../atoms/Button";
import { CardsCarouselContainer } from "../pages/ResultsPage/styles";

const CardsCarousel = ({
  card,
  onIncrement,
  onDecrement,
  cardNumber,
  totalNumberOfCards,
}) => {
  if (card) {
    return (
      <CardsCarouselContainer>
        <div>
          <Card
            key={card.id}
            cardName={card.name}
            imageUrl={card.image_uris ? card.image_uris.normal : ""}
          />
        </div>
        <Button onClick={onDecrement} buttonText="<" />
        <p>
          {cardNumber}/{totalNumberOfCards}
        </p>
        <Button onClick={onIncrement} buttonText=">" />
      </CardsCarouselContainer>
    );
  }
  return <CardsCarouselContainer></CardsCarouselContainer>;
};
export default CardsCarousel;
