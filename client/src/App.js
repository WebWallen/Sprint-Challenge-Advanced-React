import React from 'react';
import './App.css';
import PlayerCard from "./components/PlayerCard";
import DarkModeButton from "./components/DarkModeButton";

class App extends React.Component {
  state = {
    players: []
  }

  fetchPlayers = () => {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(response => this.setState({ players: response }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  render() {
    return (
      <div className="App">
        <h1>Soccer Players (Name, Country, and Search Volume)</h1>
        <p>Note: they are listed in order of popularity.</p>
        <DarkModeButton />
        <PlayerCard players={this.state.players} />
      </div>
    )
  }
}

export default App;