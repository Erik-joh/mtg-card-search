import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EditSearch, ResultContainer } from "./styles";
import Loading from "../../organisms/Loading";
import FailedToLoad from "../../organisms/FailedToLoad";
import GeneratedCard from "../../molecules/GeneratedCard";
import CardsCarousel from "../../organisms/CardsCarousel";
import { PageContainer } from "../SearchPage/styles";

const ResultsPage = (props) => {
  const { generatedCard, cards, errorMsg, loading } = useSelector(
    (state) => state.searchReducer
  );
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
      </ResultContainer>
    </PageContainer>
  );
};

export default ResultsPage;
