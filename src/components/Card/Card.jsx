import React from 'react';
import './Card.css';
import EditButtons from '../../containers/EditButtons';

const Card = (props) => {
  const { title, body, priority, created_by, assigned_to, id } = props;

  return (
    <div className="card">
      <div>{title}</div>
      <div>{body}</div>
      <div>{priority}</div>
      <div>Created by: {created_by}</div>
      <div>Assigned to: {assigned_to}</div>
      <div>Id: {id}</div>
      <EditButtons id={id} />
    </div>
  );
};

export default Card;
