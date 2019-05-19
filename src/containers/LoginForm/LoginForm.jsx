import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { LogIn } from '../../actions';

import { showNewCard } from '../../actions';
import { connect } from 'react-redux';
import './LoginForm.css';

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
    };
    // this.addNewCard = this.addNewCard.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.clickForm = this.clickForm.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    switch (event.target.id) {
      case 'email':
        this.setState({ emailInput: event.target.value });
        break;
      case 'password':
        this.setState({ passwordInput: event.target.value });
        break;
    }
  }

  loginUser(e) {
    e.preventDefault();
    // let modal = document.getElementById('myModal');
    // modal.style.display = 'none';

    const data = {};
    data.email = this.state.emailInput;
    data.password = this.state.passwordInput;
    console.log(data);
    this.props.LogIn(data);
    this.setState({
      emailInput: '',
      passwordInput: '',
    });
  }

  closeForm(e) {
    e.preventDefault();
    let modal = document.getElementById('loginModal');
    modal.style.display = 'none';
  }
  clickForm(event) {
    console.log(this.props.newCardMaker);
    this.props.showNewCard(this.props.newCardMaker);
  }
  render() {
    // if (this.state.newForm) {
    if (this.props.isLoggedIn === null) {
      return (
        <div id="loginModal">
          <div id="login-modal-content">
            {/* <div id="closeButtonDiv">
              <button onClick={this.closeForm} className="formButtons">
                Close
              </button>
            </div> */}
            <div id="formHeader">
              <h2>Welcome To Your Kanban</h2>
              <h3>Please Log-in</h3>
            </div>
            <form id="newCardForm">
              <div className="formDiv">
                <label htmlFor="title" className="labelClass">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={this.state.emailInput}
                  onChange={this.handleInputChange}
                  required
                  pattern="[A-Za-z0-9]{2,20}"
                />
              </div>

              <div className="formDiv">
                <label htmlFor="body" className="labelClass">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.passwordInput}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <button onClick={this.loginUser} className="formButtons">
                Log In
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    // cards: state.cards
    newCardMaker: state.cardReducer.newCardMaker,
    isLoggedIn: state.cardReducer.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogIn: (card) => {
      return dispatch(LogIn(card));
    },
    // showNewCard: (state) => {
    //   dispatch(showNewCard(state));
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCardForm);
