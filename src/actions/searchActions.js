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
export function clearErrorMessage() {
  return { type: actionTypes.CLEAR_ERROR_MESSAGE };
}
export function clearState() {
  return { type: actionTypes.CLEAR_SEARCH_STATE };
}
export function searchRandomImageSuccess(imageUrl) {
  return { type: actionTypes.SEARCH_RANDOM_CARD_IMAGE, imageUrl };
}
export function searchRandomImageFaileed() {
  return { type: actionTypes.SEARCH_RANDOM_CARD_IMAGE_FAILED };
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
        dispatch(searchCardsFailed("No cards found!"));
        dispatch(searchCardsLoading(false));
      });
  };
}
export function searchRandomImage() {
  return function (dispatch) {
    scryfallApi
      .getRandomCardImageUrl()
      .then((imageUrl) => dispatch(searchRandomImageSuccess(imageUrl)))
      .catch((error) => {
        dispatch(searchRandomImageFaileed());
      });
  };
}
