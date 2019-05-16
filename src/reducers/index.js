import { LOAD_CARDS } from '../actions';

const initialState = {
  cards: [],
  isLoggedIn: true,
};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [...action.payload] });
    default:
      return state;
  }
}

export default cardReducer;

//  ... = a spread operator
