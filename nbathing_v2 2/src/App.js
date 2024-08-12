import React, { useState } from 'react';
import PlayerSearch from './components/playersearch';
import PlayerStats from './components/playerstats';
import PlayerComparator from './components/playercomparator';
import './styles.css';

function App() {
  const [selectedPlayer1, setSelectedPlayer1] = useState(null);
  const [selectedPlayer2, setSelectedPlayer2] = useState(null);

  return (
    <div className="app">
      <h1>NBA Player Stats Comparator</h1>

      <PlayerSearch onPlayerSelect={setSelectedPlayer1} />
      <PlayerStats player={selectedPlayer1} />

      <PlayerSearch onPlayerSelect={setSelectedPlayer2} />
      <PlayerComparator player1={selectedPlayer1} player2={selectedPlayer2} />
    </div>
  );
}

export default App;
