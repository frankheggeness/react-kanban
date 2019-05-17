import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { deleteCard } from '../../actions';
import { connect } from 'react-redux';
// import './NewCardForm.css';

class EditButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.deleteCard = this.deleteCard.bind(this);
    this.showButton = this.showButton.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  deleteCard(event) {
    let data = {
      id: this.props.id,
    };
    this.props.deleteCard(data);
  }

  showButton(event) {
    this.setState({
      show: true,
    });
  }
  render() {
    if (this.state.show) {
      return <button onClick={this.deleteCard}>Delete Card</button>;
    } else {
      return <button onClick={this.showButton}>show</button>;
    }
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
