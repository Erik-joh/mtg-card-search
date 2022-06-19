export const initialState = {
  generatedCard: {
    cardName: "",
    cardType: "",
    cmc: "",
    description: "",
    power: "",
    toughness: "",
  },
  randomImage: { errorMsg: "", randomImageUrl: "" },
  cards: [],
  loading: false,
  errorMsg: "",
};
