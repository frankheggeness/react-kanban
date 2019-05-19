import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { editCard } from '../../actions';
import { showNewCard } from '../../actions';
import { connect } from 'react-redux';
import './DetailCard.css';

class DetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: this.props.title,
      bodyInput: this.props.body,
      priorityInput: this.props.priority,
      statusInput: this.props.status_id,
      created_byInput: this.props.created_by,
      assigned_toInput: this.props.assigned_to,
      id: this.props.id,
      newForm: this.props.newCardMaker,
    };
    this.editThisCard = this.editThisCard.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.clickForm = this.clickForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    switch (event.target.id) {
      case 'title':
        this.setState({ titleInput: event.target.value });
        break;
      case 'body':
        this.setState({ bodyInput: event.target.value });
        break;
      case 'priority':
        this.setState({ priorityInput: event.target.value });
        break;
      case 'status':
        this.setState({ statusInput: event.target.value });
        break;
      case 'created_by':
        this.setState({ created_byInput: event.target.value });
        break;
      case 'assigned_to':
        this.setState({ assigned_toInput: event.target.value });
        break;
    }
  }

  editThisCard(e) {
    e.preventDefault();
    let modalID = 'editModal' + this.props.id;
    let modal = document.getElementById(modalID);
    modal.style.display = 'none';
    const data = {};
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.priority_id = this.state.priorityInput;
    data.created_by = this.state.created_byInput;
    data.created_by = 1;
    data.assigned_to = this.state.assigned_toInput;
    data.id = this.props.id;
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
    console.log(data);
    this.props.editCard(data);
    // this.setState({
    //   titleInput: '',
    //   bodyInput: '',
    //   priorityInput: '',
    //   statusInput: '',
    //   created_byInput: '',
    //   assigned_toInput: '',
    //   newForm: false,
    // });
  }

  closeForm(e) {
    e.preventDefault();
    // let modal = document.getElementById('editModal')
    // modal.style.display = 'none'
    const modalId = 'editModal' + this.props.id;
    let findModal = document.getElementById(modalId);
    console.log(modalId);
    console.log(findModal);
    findModal.style.display = 'none';
  }
  clickForm(event) {
    console.log(this.props.newCardMaker);
    this.props.showNewCard(this.props.newCardMaker);
  }

  render() {
    // if (this.state.newForm) {
    const modalId = 'editModal' + this.props.id;
    return (
      <div className="editModal" id={modalId}>
        <div id="edit-modal-content" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardReducer.cards,
    // newCardMaker: state.cardReducer.newCardMaker,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card) => {
      dispatch(editCard(card));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailCard);
