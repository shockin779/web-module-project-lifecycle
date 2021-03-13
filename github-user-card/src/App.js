import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UserInfo from './components/UserInfo';


//<img src="https://ghchart.rshah.org/shockin779" alt="2016rshah's Github chart" />

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <UserInfo />
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    username: 'shockin779'
  };

  changeUsername = newUsername => {
    this.setState({...this.state, username: newUsername});
  }

  render() {
    return (
      <div className="App">
        <Header changeUsername={this.changeUsername}/>
        <UserInfo username={this.state.username} />
      </div>
    );
  }
}

export default App;
