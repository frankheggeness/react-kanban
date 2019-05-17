import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { deleteCard } from '../../actions';
import { connect } from 'react-redux';
// import './NewCardForm.css';

class EditButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deleteCard = this.deleteCard.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  deleteCard(event) {
    let data = {
      id: this.props.id,
    };
    this.props.deleteCard(data);
  }
  render() {
    return <button onClick={this.deleteCard}>Delete Card</button>;
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.EditButtons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (card) => {
      dispatch(deleteCard(card));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditButtons);
