const urlsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_URLS":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default urlsReducer;
