import React from 'react';
import './App.css';
import axios from "axios";
import PlayerCard from "./components/PlayerCard";

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
        <PlayerCard players={this.state.players}/>
      </div>
    )
  }
}

export default App;