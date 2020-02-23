const initialState = {
  prediction: "",
  imageUrl: ""
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_PREDICTION":
      return { ...state, prediction: action.payload };
    case "UPDATE_URL":
      return { ...state, imageUrl: action.payload };
    default:
      return state;
  }
};
