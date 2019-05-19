import React from 'react';
import './Card.css';
import EditButtons from '../../containers/EditButtons';
import EditCardForm from '../../containers/EditCardForm';

const Card = (props) => {
  const { title, body, priority, created_by, assigned_to, id, status_id, users } = props;
  let cardClass = 'card' + status_id;
  return (
    <div className={cardClass}>
      <div className="cardTitle">{title}</div>
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
        {/* <div>Id: {id}</div> */}
      </div>
    </div>
  );
};

export default Card;
