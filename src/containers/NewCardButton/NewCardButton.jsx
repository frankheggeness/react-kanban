import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { addCard } from '../../actions';
import { showNewCard } from '../../actions';
import { connect } from 'react-redux';
// import './NewCardButton.css';

class NewCardButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickForm = this.clickForm.bind(this);
  }

  clickForm(event) {
    let input;
    if (this.props.newCardMaker === false) {
      input = true;
      // this.props.newCardMaker = true;
    } else {
      input = false;
      // this.props.newCardMaker = false;
    }
    this.props.showNewCard(input);
  }
  render() {
    return <button onClick={this.clickForm}>New Card</button>;
  }
}
const mapStateToProps = (state) => {
  return {
    // cards: state.cards
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
