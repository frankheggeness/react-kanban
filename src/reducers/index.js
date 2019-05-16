import { LOAD_CARDS } from '../actions';
import { ADD_CARD } from '../actions';
import { LOAD_USERS } from '../actions';

const initialState = {
  cards: [],
  users: [],
  isLoggedIn: true,
};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [...action.payload] });
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });

    case LOAD_USERS:
      return Object.assign({}, state, { users: [...action.payload] });

    default:
      return state;
  }
}

export default cardReducer;

//  ... = a spread operator
