import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardForm from "../../organisms/CardForm";
import * as searchActions from "../../../actions/searchActions";
import { useNavigate } from "react-router-dom";
import { PageContainer, CardFormContainer } from "./styles";
import RandomCardImage from "../../molecules/RandomCardImage";

const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const generatedCard = useSelector(
    (state) => state.searchReducer.generatedCard
  );
  const randomImage = useSelector((state) => state.searchReducer.randomImage);

  function onSubmit(values) {
    let checkedValues = {};
    switch (values.cardType) {
      case "land":
        checkedValues = { ...values, power: "", toughness: "", cmc: "" };
        break;
      case "sorcery":
      case "instant":
      case "enchantment":
        checkedValues = {
          ...values,
          power: "",
          toughness: "",
          cmc: values.cmc.toString(),
        };
        break;
      default:
        checkedValues = {
          ...values,
          power: values.power.toString(),
          toughness: values.toughness.toString(),
          cmc: values.cmc.toString(),
        };
        break;
    }
    dispatch(searchActions.searchCards(checkedValues));
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
  function validateFields(values) {
    const errors = {};
    const hasNoFieldValues =
      values.power === "" &&
      values.toughness === "" &&
      values.cmc === "" &&
      values.description === "" &&
      values.cardType === "";
    if (hasNoFieldValues) {
      errors.submit =
        "You need at least of one field: Type, Cost, Description, Power or Toughness";
    }
    return errors;
  }
  return (
    <PageContainer>
      <CardFormContainer>
        <CardForm
          onSubmit={onSubmit}
          onClear={onClear}
          formFieldValues={generatedCard}
          validateFields={validateFields}
        >
          <RandomCardImage
            onClick={onRandomImageClick}
            imageUrl={randomImage.randomImageUrl}
            errorMsg={randomImage.errorMsg}
          />
        </CardForm>
      </CardFormContainer>
    </PageContainer>
  );
};
export default SearchPage;
