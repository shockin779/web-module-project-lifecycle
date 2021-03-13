import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import axios from 'axios';


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

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        console.log(res.data)
        axios.get(`https://api.github.com/users/${this.state.username}/followers`)
          .then(res => console.log(res.data))
          .catch(err => console.error(`There was an error: ${err.message}`))
      })
      .catch(err => console.error(`There was an error: ${err.message}`))
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
