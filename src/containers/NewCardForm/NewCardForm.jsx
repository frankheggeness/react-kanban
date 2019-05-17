import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { addCard } from '../../actions';
import { showNewCard } from '../../actions';
import { connect } from 'react-redux';
import './NewCardForm.css';

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: '',
      newForm: this.props.newCardMaker,
    };
    this.addNewCard = this.addNewCard.bind(this);
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

  addNewCard(e) {
    e.preventDefault();
    let modal = document.getElementById('myModal')
    modal.style.display = 'none'
    const data = {};
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.priority_id = this.state.priorityInput;
    // data.created_by = this.state.created_byInput;
    data.created_by = 1;
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
    console.log(data);
    this.props.addCard(data);
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: '',
      newForm: false,
    });
  }
  clickForm(event) {
    console.log(this.props.newCardMaker);
    this.props.showNewCard(this.props.newCardMaker);
  }
  render() {
    // if (this.state.newForm) {
      return (
        <div id="myModal" >
        <div id="modal-content">
        <form id="newCardForm">
          <div className="formDiv">
            <label htmlFor="title" className="labelClass">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.titleInput}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="formDiv">
            <label htmlFor="priority" className="labelClass">
              Priority Id:
            </label>
            <select name="priority" id="priority" value={this.state.priorityInput} onChange={this.handleInputChange}>
              <option value="">--Please choose an option--</option>
              <option value="1">High</option>
              <option value="2">Med</option>
              <option value="3">Low</option>
              <option value="4">Blocked</option>
            </select>
          </div>

          <div className="formDiv">
            <label htmlFor="body" className="labelClass">
              Body:
            </label>
            <input type="text" name="body" id="body" value={this.state.bodyInput} onChange={this.handleInputChange} />
          </div>

          <div className="formDiv">
            <label htmlFor="status" className="labelClass">
              Status Id:
            </label>
            <select name="status" id="status" value={this.state.statusInput} onChange={this.handleInputChange}>
              <option value="">--Please choose an option--</option>
              <option value="QUEUE">In Queue</option>
              <option value="IN PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
          </div>

          <div className="formDiv">
            <label htmlFor="created_by" className="labelClass">
              Created_by:
            </label>
            <input
              type="text"
              name="created_by"
              id="created_by"
              value={this.state.created_byInput}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="formDiv">
            <select
              name="assigned_to"
              id="assigned_to"
              value={this.state.assigned_toInput}
              onChange={this.handleInputChange}
            >
              <option value="">--Assign Task To User--</option>
              {this.props.users.map((user) => {
                return <option key={user.id} value={user.id}>{`${user.first_name} ${user.last_name}`}</option>;
              })}
            </select>
          </div>

          <button onClick={this.addNewCard}>Create New Card</button>
        </form>
        </div>
          
        </div>
        
      );
    // } else  {
    //   return <div> no form</div>;
    // }
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
)(NewCardForm);
