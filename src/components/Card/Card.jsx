import React, { Component } from 'react';

import { deleteCard } from '../../actions';
import { connect } from 'react-redux';
import './Card.css';
import EditButtons from '../../containers/EditButtons';
import EditCardForm from '../../containers/EditCardForm';
import DetailCard from '../../containers/DetailCard';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.deleteCard = this.deleteCard.bind(this);
    this.showDetail = this.showDetail.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  deleteCard(event) {
    let data = {
      id: this.props.id,
    };
    this.props.deleteCard(data);
  }

  showDetail(event) {
    // const modalId = 'editModal' + this.props.id;
    // let findModal = document.getElementById(modalId);
    // console.log(modalId);
    // console.log(findModal);
    // findModal.style.display = 'block';
    console.log(this.state.show);
    if (!this.state.show) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
      // this.setState({ show: true });
    }

    console.log(this.state.show);
  }
  render() {
    const { title, body, priority, created_by, assigned_to, id, status_id, users } = this.props;
    let cardClass = 'card' + status_id;
    if (this.state.show) {
      return (
        <div className={cardClass}>
          <div className="cardTitle" onClick={this.showDetail}>
            {title}
          </div>
          {/* <div className="cardBody">{body}</div> */}
          <div className="cardPriority">Priority: {priority}</div>
          <div className="cardCreated">Created by: {created_by}</div>
          <div className="cardLowerRow">
            <EditButtons id={id} />
            <EditCardForm
              id={id}
              title={title}
              body={body}
              priority={priority}
              created_by={created_by}
              assigned_to={assigned_to}
              status_id={status_id}
              users={users}
            />
            <DetailCard
              id={id}
              title={title}
              body={body}
              priority={priority}
              created_by={created_by}
              assigned_to={assigned_to}
              status_id={status_id}
            />
            <div className="cardAssigned">For: {assigned_to}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={cardClass}>
          <div className="cardTitle" onClick={this.showDetail}>
            {title}
          </div>
          {/* <div className="cardBody">{body}</div> */}
          <div className="cardPriority">Priority: {priority}</div>
          <div className="cardCreated">Created by: {created_by}</div>
          <div className="cardLowerRow">
            <EditButtons id={id} />
            <EditCardForm
              id={id}
              title={title}
              body={body}
              priority={priority}
              created_by={created_by}
              assigned_to={assigned_to}
              status_id={status_id}
              users={users}
            />
            <div className="cardAssigned">For: {assigned_to}</div>
          </div>
        </div>
      );
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
)(Card);
