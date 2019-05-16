import React from 'react';
import './Column.css';
import CardList from '../../containers/CardList';

const Column = (props) => {
  let filterFunc = filterCards(props.label, props.cards);
  return (
    <div className="column-container">
      <div className={props.label}>{props.label}</div>
      <CardList cards={filterFunc} users={props.users} />
    </div>
  );
};

function filterCards(label, cards) {
  switch (label) {
    case 'Queue':
      return cards.filter((card) => card.status_id === 1);
    case 'In Progress':
      return cards.filter((card) => card.status_id === 2);
    case 'Done':
      return cards.filter((card) => card.status_id === 3);
    default:
      return cards;
  }
}
export default Column;
