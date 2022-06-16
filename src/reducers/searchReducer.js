import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GENERATE_CARD:
      console.log(action.generatedCard);
      return { ...state, generatedCard: action.generatedCard };
    case actionTypes.SEARCH_CARDS_LOADING:
      console.log(action.loading);
      return { ...state, loading: action.loading };
    case actionTypes.SEARCH_CARDS_SUCCESS:
      console.log(action.cards);
      return { ...state, cards: action.cards };
    case actionTypes.SEARCH_CARDS_FAILED:
      console.log(action.errorMsg);
      return { ...state, errorMsg: action.errorMsg };
    case actionTypes.CLEAR_SEARCH_STATE:
      console.log("clear state reducer");
      return initialState;
    default:
      return state;
  }
}
