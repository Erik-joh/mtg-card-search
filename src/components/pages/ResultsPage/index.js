import React from "react";
import { useSelector } from "react-redux";

const ResultsPage = (props) => {
  const generatedCard = useSelector(
    (state) => state.searchReducer.generatedCard
  );
  console.log(generatedCard);
  console.log(props);
  return <h1>ResultsPage</h1>;
};

export default ResultsPage;
