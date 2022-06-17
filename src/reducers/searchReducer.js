import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
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
      return initialState;
    case actionTypes.SEARCH_RANDOM_CARD_IMAGE:
      console.log("Random image", action.imageUrl);
      return {
        ...state,
        generatedCard: { ...state.generatedCard, imageUrl: action.imageUrl },
      };
    default:
      return state;
  }
}
