import React from "react";
import Card from "../molecules/Card";
import {
  CardsCarouselContainer,
  IncDecContainer,
} from "../pages/ResultsPage/styles";

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
        <IncDecContainer>
          <button onClick={onDecrement} />
          <p>
            {cardNumber}/{totalNumberOfCards}
          </p>
          <button onClick={onIncrement} />
        </IncDecContainer>
      </CardsCarouselContainer>
    );
  }
  return <CardsCarouselContainer></CardsCarouselContainer>;
};
export default CardsCarousel;
