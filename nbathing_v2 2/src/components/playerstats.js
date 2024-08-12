import React, { useEffect, useState } from 'react';

function PlayerStats({ player }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (player) {
      const fetchPlayerStats = async () => {
        try {
          const response = await fetch(`rapidapi.com/player-statistic/${player.id}?key=KEY`);
          const data = await response.json();
          setStats(data); // Adjust based on the actual API response structure
        } catch (error) {
          console.error('Error fetching player stats:', error);
        }
      };

      fetchPlayerStats();
    }
  }, [player]);

  if (!player) return <div>Select a player to view stats</div>;
  if (!stats) return <div>Loading stats...</div>;

  return (
    <div className="player-stats">
      <h2>{player.first_name} {player.last_name}</h2>
      <p>Points per Game: {stats.Pts}</p>
      <p>Assists per Game: {stats.Ast}</p>
      <p>Rebounds per Game: {stats.Reb}</p>
      {/* Add more stats as needed */}
    </div>
  );
}

export default PlayerStats;
