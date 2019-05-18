// ACTION DEFINTION
// export const ADD_BOOK = 'ADD_BOOK';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const LOAD_USERS = 'LOAD_USERS';
export const SHOW_NEW_CARD = 'SHOW_NEW_CARD';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

// ACTION CREATOR

export const logOut = () => {
  return (dispatch) => {
    return fetch('/api/cards/logout')
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        console.log(cards);
        return dispatch({
          type: LOGOUT,
          payload: cards,
        });
      })
      .catch((err) => console.log('Cant access website' + err));
  };
};

export const logIn = () => {
  return (dispatch) => {
    return fetch('/api/cards/login')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((user) => {
        console.log(user);
        return dispatch({
          type: LOGIN,
          payload: user,
        });
      })
      .catch((err) => console.log('Cant access website' + err));
  };
};

export const addCard = (card) => {
  return (dispatch) => {
    return fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: ADD_CARD,
          payload: body,
        });
      });
  };
};

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/api/cards')
      .then((response) => {
        // console.log('$%#$^#$^#^$#$^' + response);

        // return response.json();
        // let obj = response.toJSON();
        return response.json();
      })
      .then((cards) => {
        console.log(cards);
        return dispatch({
          type: LOAD_CARDS,
          payload: cards,
        });
      })
      .catch((err) => console.log('Cant access website' + err));
  };
};

export const loadUsers = () => {
  return (dispatch) => {
    return fetch('/api/users')
      .then((response) => {
        // console.log('$%#$^#$^#^$#$^' + response);

        // return response.json();
        // let obj = response.toJSON();
        return response.json();
      })
      .then((users) => {
        console.log(users);
        return dispatch({
          type: LOAD_USERS,
          payload: users,
        });
      })
      .catch((err) => console.log('Cant access website' + err));
  };
};

export const deleteCard = (id) => {
  return (dispatch) => {
    return fetch('/api/cards', {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: DELETE_CARD,
          payload: body,
        });
      })
      .catch((err) => console.log('@' + err));
  };
};

export const editCard = (id) => {
  return (dispatch) => {
    return fetch('/api/cards/edit', {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: EDIT_CARD,
          payload: body,
        });
      })
      .catch((err) => console.log('@' + err));
  };
};

export const showNewCard = (input) => {
  // console.log(input);
  // return {
  //   type: SHOW_NEW_CARD,
  //   payload: !input,
  // };
  console.log('actioninput' + input);
  return (dispatch) => {
    dispatch({
      type: SHOW_NEW_CARD,
      payload: input,
    });
  };
};
