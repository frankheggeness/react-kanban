import { LOAD_CARDS, SHOW_NEW_CARD } from '../actions';
import { ADD_CARD } from '../actions';
import { LOAD_USERS } from '../actions';
import { DELETE_CARD } from '../actions';
import { EDIT_CARD } from '../actions';

const initialState = {
  cards: [],
  users: [],
  newCardMaker: false,
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

    case DELETE_CARD:
      return Object.assign({}, state, { cards: [...action.payload] });

    case SHOW_NEW_CARD:
      return Object.assign({}, state, { newCardMaker: action.payload });

    case EDIT_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    default:
      return state;
  }
}

export default cardReducer;

//  ... = a spread operator
