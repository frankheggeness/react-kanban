import React from 'react';
import './Card.css';
import EditButtons from '../../containers/EditButtons';

const Card = (props) => {
  const { title, body, priority, created_by, assigned_to, id, status_id} = props;
  let cardClass = 'card' + status_id
  return (
    <div className={cardClass}>
      <div className="cardTitle">{title}</div>
      {/* <div className="cardBody">{body}</div> */}
      <div className="cardPriority">Priority: {priority}</div>
      <div className="cardCreated">Created by: {created_by}</div>
      <div className="cardLowerRow">
      <EditButtons id={id} />
      <div className="cardAssigned">For: {assigned_to}</div>
      {/* <div>Id: {id}</div> */}
      
      </div>
    </div>
  );
};

export default Card;
