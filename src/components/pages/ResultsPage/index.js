import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EditSearch, ResultContainer } from "./styles";
import Loading from "../../organisms/Loading";
import FailedToLoad from "../../organisms/FailedToLoad";
import GeneratedCard from "../../molecules/GeneratedCard";
import CardsCarousel from "../../organisms/CardsCarousel";
import { PageContainer } from "../SearchPage/styles";
import ColorPercent from "../../organisms/ColorPercent";

const ResultsPage = (props) => {
  const { generatedCard, cards, errorMsg, loading } = useSelector(
    (state) => state.searchReducer
  );
  const [colorPercentItems, setColorPercentItems] = useState([]);
  useEffect(() => {
    setColorPercentItems(CalculateColorPrecent());
  }, [cards]);
  /* const colorPercentItems = useMemo(() => CalculateColorPrecent(), [cards]); */

  function CalculateColorPrecent() {
    //const colorsAmount = { white: 0, blue: 0, black: 0, red: 0, green: 0 };
    const colorsAmount = {};
    const totalAmountOfCards = cards.length;
    cards.forEach((card) => {
      if (card.colors) {
        card.colors.forEach((color) => {
          colorsAmount[color]
            ? colorsAmount[color]++
            : (colorsAmount[color] = 1);
        });
      }
    });

    const colorPercentItems = [
      {
        percent: percentage(colorsAmount.W, totalAmountOfCards),
        textColor: "black",
        backgroundColor: "white",
        id: 1,
      },
      {
        percent: percentage(colorsAmount.U, totalAmountOfCards),
        textColor: "white",
        backgroundColor: "blue",
        id: 2,
      },
      {
        percent: percentage(colorsAmount.B, totalAmountOfCards),
        textColor: "white",
        backgroundColor: "black",
        id: 3,
      },
      {
        percent: percentage(colorsAmount.R, totalAmountOfCards),
        textColor: "white",
        backgroundColor: "red",
        id: 4,
      },
      {
        percent: percentage(colorsAmount.G, totalAmountOfCards),
        textColor: "white",
        backgroundColor: "green",
        id: 5,
      },
    ];

    return colorPercentItems;
  }
  function percentage(partialValue, totalValue) {
    if (partialValue === undefined) return 0;
    if (totalValue === 0) return 0;
    const percent = 100 * (partialValue / totalValue);
    return Math.round(percent);
  }
  if (loading) {
    return <Loading loadingText="Loading..." />;
  }
  if (errorMsg !== "") {
    return (
      <FailedToLoad errorMsg={errorMsg} linkUrl="/" linkText="Edit Search" />
    );
  }
  return (
    <PageContainer>
      <ResultContainer>
        <GeneratedCard generatedCard={generatedCard} />
        <CardsCarousel cards={cards} />
        <EditSearch>
          <Link to="/">Edit Search</Link>
        </EditSearch>
        <ColorPercent colorPercentItems={colorPercentItems} />
      </ResultContainer>
    </PageContainer>
  );
};

export default ResultsPage;
