export const Actions = {
  SET_API_KEYS: "SET_API_KEYS",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_API_KEYS: {
      return { ...state, ...action.payload };
    }
    default:
      console.error("Not among actions");
  }
};

export default Reducer;
