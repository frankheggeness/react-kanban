import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { addCard } from '../../actions';
import { connect } from 'react-redux';

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: '',
    };
    this.addNewCard = this.addNewCard.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    switch (event.target.id) {
      case 'title':
        this.setState({ titleInput: event.target.value });
        break;
      case 'body':
        this.setState({ priorityInput: event.target.value });
        break;
    }
  }

  addNewCard(event) {
    const data = {};
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.priority_id = this.state.priorityInput;
    data.created_by = this.state.created_byInput;
    data.assigned_to = this.state.assigned_toInput;
    switch (this.state.statusInput) {
      case 'QUEUE':
        data.status_id = 1;
        break;
      case 'IN PROGRESS':
        data.status_id = 2;
        break;
      case 'DONE':
        data.status_id = 3;
        break;
    }
    this.props.addCard(data);
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: '',
    });
  }
  render() {
    return (
      <div id="newCardForm">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={this.state.titleInput} onChange={this.handleInputChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.NewCard,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCard);
