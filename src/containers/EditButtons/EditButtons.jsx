import React, { Component } from 'react';
// import AddCardButton from '../AddCardButton';
import { deleteCard } from '../../actions';
import { connect } from 'react-redux';
import './EditButtons.css';


class EditButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.deleteCard = this.deleteCard.bind(this);
    this.showForm = this.showForm.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  deleteCard(event) {
    let data = {
      id: this.props.id,
    };
    this.props.deleteCard(data);
  }

  showForm(event) {
    const modalId = 'editModal' + this.props.id
    let findModal = document.getElementById(modalId)
    console.log(modalId)
    console.log(findModal)
    findModal.style.display = 'block'
  }
  render() {
    // if (this.state.show) {
      return <div className="buttonsContainer">
        <button onClick={this.showForm} className="deleteButton">Edit{this.props.id}</button>
        <button onClick={this.deleteCard} className="deleteButton">Delete</button>
        
      </div>
      
    // } else {kl;
    //   return <button onClick={this.showButton}>show</button>;
    // }
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
