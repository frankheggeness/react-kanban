import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { addCard } from '../../actions';
import { showNewCard } from '../../actions';
import { connect } from 'react-redux';
// import './NewCardButton.css';

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
    // let input;
    // if (this.props.newCardMaker === false) {
    //   input = true;
    //   console.log('NEW CARD' + this.props.newCardMaker);
    //   console.log('input' + input);
    //   this.props.showNewCard(input);
    // } else if (this.props.newCardMaker === true) {
    //   console.log('NEW CARD' + this.props.newCardMaker);
    //   input = false;
    //   this.props.showNewCard(input);
    // }
    if (this.state.buttonClick === false) {
      this.setState({
        buttonClick: true,
      });
      this.props.showNewCard(true);
    }
    if (this.state.buttonClick === true) {
      this.setState({
        buttonClick: false,
      });
      this.props.showNewCard(false);
    }
  }
  render() {
    return <button onClick={this.clickForm}>New Card</button>;
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
