import React from 'react';
import './App.css';
import KanbanTitle from './components/KanbanTitle';
import CardList from './containers/CardList';
import NewCardForm from './containers/NewCardForm';
import NewCardButton from './containers/NewCardButton';
import LoginButton from './containers/LoginButton';
import LoginForm from './containers/LoginForm';
import Column from './components/Column';
// import AddBook from './containers/AddBook';
import { connect } from 'react-redux';
import { loadCards } from './actions';
import { loadUsers } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'K A N B A N',
    };
  }

  componentDidMount() {
    return this.props.loadUsers() && this.props.loadCards() && console.log(this.props.cards);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <UserLoggedIn loggedIn={this.props.length} /> */}
          <KanbanTitle title={this.state.title} />
          <div id="headerButtons">
            <NewCardButton />
            <LoginButton />
          </div>
        </header>
        <div className="main-body">
          <Column
            className="Queue-column"
            status_id={this.props.status_id}
            users={this.props.users}
            label="In Queue"
            cards={this.props.cards}
          />

          <Column
            className="Progress-column"
            status_id={this.props.status_id}
            users={this.props.users}
            label="In Progress"
            cards={this.props.cards}
          />

          <Column
            className="Done-column"
            status_id={this.props.status_id}
            users={this.props.users}
            label="Done"
            cards={this.props.cards}
          />
        </div>
        <NewCardForm users={this.props.users} />
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardReducer.cards,
    users: state.cardReducer.users,
    newCardMaker: state.cardReducer.newCardMaker,
    isLoggedIn: state.cardReducer.isLoggedIn,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    },
    loadUsers: () => {
      return dispatch(loadUsers());
    },
  };
};

App = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(App);

export default App;
