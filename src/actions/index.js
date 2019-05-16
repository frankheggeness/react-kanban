// ACTION DEFINTION
// export const ADD_BOOK = 'ADD_BOOK';
export const LOAD_CARDS = 'LOAD_CARDS';

// ACTION CREATOR
// export function addBook(newBook) {
//   // return {
//   //   type: ADD_BOOK,
//   //   payload: newBook,
//   // };
// }

// export function addBook(newBook) {
//   return (dispatch) => {
//     // call out to server
//     return fetch('/books', {
//       method: 'POST',
//       body: JSON.stringify(newBook),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((body) => {
//         return dispatch({
//           type: ADD_BOOK,
//           payload: body,
//         });
//       });
//   };
// }

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/api/cards')
      .then((response) => {
        console.log('$%#$^#$^#^$#$^' + response);

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

// export function userLoggedOut() {
//   return {
//     type: USER_LOGGED_OUT,
//     payload: undefinde,
//   };
// }
