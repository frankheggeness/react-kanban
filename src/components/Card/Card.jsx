import React from 'react';

const Card = (props) => {
  const { title, body } = props;

  return (
    <div className="card">
      <div>{title}</div>
      <div>{body}</div>
    </div>
  );
};

export default Card;
