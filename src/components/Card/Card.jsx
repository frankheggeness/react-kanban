import React from 'react';

const Card = (props) => {
  const { title, body, priority } = props;

  return (
    <div className="card">
      <div>{title}</div>
      <div>{body}</div>
      <div>{priority}</div>
    </div>
  );
};

export default Card;
