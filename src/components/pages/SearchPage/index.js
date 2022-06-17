import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardForm from "../../organisms/CardForm";
import * as searchActions from "../../../actions/searchActions";
import { useNavigate } from "react-router-dom";
import { PageContainer, CardFormContainer } from "./styles";
import RandomCardImage from "../../molecules/RandomCardImage";

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
  function onRandomImageClick(event) {
    event.preventDefault();
    dispatch(searchActions.searchRandomImage());
  }
  return (
    <PageContainer>
      <CardFormContainer>
        <CardForm
          onSubmit={onSubmit}
          onClear={onClear}
          formFieldValues={generatedCard}
        >
          <RandomCardImage
            onClick={onRandomImageClick}
            imageUrl={generatedCard.imageUrl}
            altText={generatedCard.cardName}
          />
        </CardForm>
      </CardFormContainer>
    </PageContainer>
  );
};
export default SearchPage;
