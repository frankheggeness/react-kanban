import React from 'react';
import './App.css';
import KanbanTitle from './components/KanbanTitle';
import CardList from './containers/CardList';
// import AddBook from './containers/AddBook';
import { connect } from 'react-redux';
import { loadCards } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Kanban Test List',
    };
  }

  componentDidMount() {
    console.log(this.props);
    return this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <UserLoggedIn loggedIn={this.props.length} /> */}
          <KanbanTitle title={this.state.title} />
        </header>

        <div className="cardlist-container">
          <CardList cards={this.props.cards} />
        </div>

        <div className="add-card-form">
          {/* <Consumer context> */}
          {/* <AddBook /> */}
          {/* </Consumer> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardReducer.cards,
    // or
    // ...state
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    },
  };
};

App = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(App);

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
