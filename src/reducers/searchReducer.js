import * as actionTypes from "../actions/actionTypes";
import * as initialState from "./initialState";
export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GENERATE_CARD:
      return { ...state, generatedCard: action.generatedCard };
    case actionTypes.SEARCH_CARDS_LOADING:
      return { ...state, loading: action.loading };
    case actionTypes.SEARCH_CARDS_SUCCESS:
      return { ...state, cards: action.cards };
    case actionTypes.SEARCH_CARDS_FAILED:
      return { ...state, errorMsg: action.errorMsg };
    case actionTypes.CLEAR_SEARCH_STATE:
      return initialState.initialState;
    case actionTypes.SEARCH_RANDOM_CARD_IMAGE:
      return {
        ...state,
        randomImage: { randomImageUrl: action.imageUrl, errorMsg: "" },
      };
    case actionTypes.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMsg: "",
      };
    case actionTypes.SEARCH_RANDOM_CARD_IMAGE_FAILED:
      return {
        ...state,
        randomImage: {
          randomImageUrl: "",
          errorMsg: "Couldn't find a Image try again",
        },
      };
    default:
      return state;
  }
}
