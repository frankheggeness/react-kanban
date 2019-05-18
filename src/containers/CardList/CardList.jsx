import React, { Component } from 'react';
import Card from '../../components/Card';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handleInputChange(e) {
  //   const { value } = e.target;
  //   this.setState({ input: value });
  // }

  render() {
    const input = this.state.input;
    const cardList = this.props.cards
      // .filter((book) => {
      //   return book.title.toLowerCase().includes(input.toLowerCase());
      // })
      .map((card, idx) => {
        return (
          <Card
            key={idx}
            id={card.id}
            title={card.title}
            body={card.body}
            priority={card.priority}
            priority_id={card.priority_id}
            status={card.status}
            status_id={card.status_id}
            created_by={card.created_by}
            assigned_to={card.assigned_to}
            users={this.props.users}
          />
        );
      });
    return (
      <>
        {/* <input type="text" value={'hello'} /> */}
        {/* <div>
          <h2 className="status">{props.status}</h2>
        </div> */}
        {cardList}
      </>
    );
  }
}

export default CardList;
