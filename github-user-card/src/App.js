import React from 'react';
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
    user: {},
    followers: []
  };

  changeUsername = newUsername => {
    axios.get(`https://api.github.com/users/${newUsername}`)
      .then(res => {
        this.setState({...this.state, user: res.data})
        axios.get(`https://api.github.com/users/${res.data.login}/followers`)
          .then(res => this.setState({...this.state, followers: res.data}))
          .catch(err => console.error(`There was an error: ${err.message}`))
      })
      .catch(err => console.error(`There was an error: ${err.message}`))
    this.setState({...this.state, user: newUsername});
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/shockin779`)
      .then(res => {
        this.setState({...this.state, user: res.data})
        axios.get(`https://api.github.com/users/shockin779/followers`)
          .then(res => this.setState({...this.state, followers: res.data}))
          .catch(err => console.error(`There was an error: ${err.message}`))
      })
      .catch(err => console.error(`There was an error: ${err.message}`))
  }

  render() {
    return (
      <div className="App">
        <Header changeUsername={this.changeUsername}/>
        <UserInfo followers={this.state.followers} user={this.state.user} />
      </div>
    );
  }
}

export default App;
