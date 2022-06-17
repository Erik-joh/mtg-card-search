import * as scryfallApi from "../api/scryfall";
import * as actionTypes from "./actionTypes";

export function searchCardsSuccess(cards) {
  return { type: actionTypes.SEARCH_CARDS_SUCCESS, cards };
}

export function searchCardsFailed(errorMsg) {
  return { type: actionTypes.SEARCH_CARDS_FAILED, errorMsg };
}

export function searchCardsLoading(loading) {
  return { type: actionTypes.SEARCH_CARDS_LOADING, loading };
}

export function generateCard(card) {
  return { type: actionTypes.GENERATE_CARD, generatedCard: card };
}
export function clearState() {
  return { type: actionTypes.CLEAR_SEARCH_STATE };
}

export function searchCards(query) {
  return function (dispatch) {
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
        dispatch(searchCardsLoading(false));
      })
      .catch(() => {
        dispatch(searchCardsFailed("Failed to get cards"));
        dispatch(searchCardsLoading(false));
      });
  };
}
