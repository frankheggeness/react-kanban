import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { addCard } from '../../actions';
import { showNewCard } from '../../actions';
import { connect } from 'react-redux';
import './NewCardButton.css';

class NewCardButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClick: false,
    };
    this.clickForm = this.clickForm.bind(this);
  }

  clickForm(event) {
    console.log('clicked');

    let modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }
  render() {
    return (
      <div className="newButtonContainer">
        <button onClick={this.clickForm} className="newCardButton">
          + NEW TASK
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    newCardMaker: state.cardReducer.newCardMaker,
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
