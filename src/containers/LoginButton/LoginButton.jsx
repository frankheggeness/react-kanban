import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { addCard } from '../../actions';
import { logOut } from '../../actions';
import { showNewCard } from '../../actions';
import { connect } from 'react-redux';
import './LoginButton.css';

class NewCardButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClick: false,
      isLoggedIn: this.props.isLoggedIn,
    };
    this.showLoginModal = this.showLoginModal.bind(this);
    this.logoutEvent = this.logoutEvent.bind(this);
  }

  showLoginModal(event) {
    console.log('clicked');
    console.log(this.props.isLoggedIn);
    console.log(this.state.isLoggedIn);

    let modal = document.getElementById('loginModal');
    modal.style.display = 'block';
  }
  logoutEvent(event) {
    // console.log('clicked');
    console.log(this.props.isLoggedIn);
    // console.log(this.state.isLoggedIn);
    this.props.logOut();
    // let modal = document.getElementById('loginModal');
    // modal.style.display = 'block';
  }

  render() {
    console.log('$%#^^#^%^#$', this.props);
    if (this.props.isLoggedIn) {
      return (
        <div className="newButtonContainer">
          <button onClick={this.logoutEvent} className="newCardButton">
            LOGOUT USER: {this.props.isLoggedIn.first_name}
          </button>
        </div>
      );
    } else if (this.props.isLoggedIn === null) {
      return (
        <div className="newButtonContainer">
          {/* <button onClick={this.showLoginModal} className="newCardButton">
            LOGIN
          </button> */}
        </div>
      );
    } else {
      console.log('ELSE', this.props);
      return <div> </div>;
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
    logOut: (state) => {
      dispatch(logOut(state));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCardButton);
