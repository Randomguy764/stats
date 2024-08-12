import React, { useState } from 'react';

const API_KEY = 'KEY'; 

function PlayerSearch({ onPlayerSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const url = `rapidapi.com/player-statistic/search?query=${value}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'player-statistic.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);
        setSuggestions(data.players || []);
        setError(null);
      } catch (error) {
        console.error('Error fetching player data:', error);
        setError('An error occurred while fetching data.');
      }
    } else {
      setSuggestions([]);
      setError(null);
    }
  };

  return (
    <div className="player-search">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search NBA Player..."
      />
      {error && <p className="error-message">{error}</p>}
      <ul>
        {suggestions.map(player => (
          <li key={player.id} onClick={() => onPlayerSelect(player)}>
            {player.first_name} {player.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerSearch;
