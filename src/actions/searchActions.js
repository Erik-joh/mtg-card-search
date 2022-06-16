import * as scryfallApi from "../api/scryfall";
import * as actionTypes from "./actionTypes";

export function searchCardsSuccess(cards) {
  console.log(cards);
  return { type: actionTypes.SEARCH_CARDS_SUCCESS, cards };
}

export function searchCardsFailed(errorMsg) {
  console.log(errorMsg);
  return { type: actionTypes.SEARCH_CARDS_FAILED, errorMsg };
}

export function searchCardsLoading(loading) {
  console.log(loading);
  return { type: actionTypes.SEARCH_CARDS_LOADING, loading };
}

export function generateCard(card) {
  console.log("generatedCardAction", card);
  return { type: actionTypes.GENERATE_CARD, generatedCard: card };
}
export function clearState() {
  return { type: actionTypes.CLEAR_SEARCH_STATE };
}

export function searchCards(query) {
  console.log("seachCardsAction:", query);
  return function (dispatch) {
    console.log("seachCardsAction step 3");
    dispatch(generateCard(query));

    dispatch(searchCardsLoading(true));

    scryfallApi
      .getCardsByQuery(query)
      .then((cards) => {
        if (cards.length === 0) {
          dispatch(searchCardsFailed("No cards found!"));
        } else {
          dispatch(searchCardsSuccess(cards));
        }
        console.log("searchCards Actiona", cards);
        dispatch(searchCardsLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(searchCardsFailed("Failed to get cards"));
      });

    console.log("searchCards", query);
  };
}
