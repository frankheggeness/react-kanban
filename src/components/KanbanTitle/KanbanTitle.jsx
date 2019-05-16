import React from 'react';
import './KanbanTitle.css';

const KanbanTitle = (props) => {
  const { title } = props;

  // ^^ const title = props.title

  return <div className="header">{title}</div>;
};

export default KanbanTitle;
