import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardForm from "../../organisms/CardForm";
import { getRandomCardImage, getCardsByQuery } from "../../../api/scryfall";
import * as searchActions from "../../../actions/searchActions";
import { useNavigate } from "react-router-dom";
import { SearchContainer, CardFormContainer } from "./styles";

const SearchPage = (props) => {
  /* getRandomCardImage(); */
  /* getCardsByQuery({ cmc: 3, pow: 3 }); */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const generatedCard = useSelector(
    (state) => state.searchReducer.generatedCard
  );
  console.log(generatedCard);
  function onSubmit(values, { setSubmitting }) {
    dispatch(searchActions.searchCards(values));
    console.log("onSubmit Values:", values);
    navigate("/result");
  }
  function onClear(event) {
    event.preventDefault();
    dispatch(searchActions.clearState());
  }
  return (
    <SearchContainer>
      <CardFormContainer>
        <CardForm
          onSubmit={onSubmit}
          onClear={onClear}
          formFieldValues={generatedCard}
        />
      </CardFormContainer>
    </SearchContainer>
  );
};
export default SearchPage;
