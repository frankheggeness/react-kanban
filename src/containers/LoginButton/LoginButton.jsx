import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { addCard } from '../../actions';
import { showNewCard } from '../../actions';
import { connect } from 'react-redux';
import './LoginButton.css';

class NewCardButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClick: false,
    };
    this.showLoginModal = this.showLoginModal.bind(this);
  }

  showLoginModal(event) {
    console.log('clicked');
    console.log(this.props.isLoggedIn);

    let modal = document.getElementById('loginModal');
    modal.style.display = 'block';
  }

  render() {
    if (this.props.isLoggedin) {
      return (
        <div className="newButtonContainer">
          <button onClick={this.showLoginModal} className="newCardButton">
            LOGOUT
          </button>
        </div>
      );
    } else {
      return (
        <div className="newButtonContainer">
          <button onClick={this.showLoginModal} className="newCardButton">
            LOGIN
          </button>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    newCardMaker: state.cardReducer.newCardMaker,
    isLoggedIn: state.cardReducer.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card));
    },
    showNewCard: (state) => {
      dispatch(showNewCard(state));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCardButton);
