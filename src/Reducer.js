export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_INPUT_TERM: "Set Search Term",
};

//Setting up the reducer action for state manipulation.

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_TERM:
      return { ...state, term: action.term };
    default:
      return state;
  }
};

export default reducer;
