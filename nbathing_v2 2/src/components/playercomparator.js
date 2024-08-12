import React from 'react';

function PlayerComparator({ player1, player2 }) {
  if (!player1 || !player2) return <div>Select two players to compare</div>;

  return (
    <div className="player-comparator">
      <div className="player">
        <h2>{player1.first_name} {player1.last_name}</h2>
        {/* Include more stats here similar to the PlayerStats component */}
      </div>
      <div className="player">
        <h2>{player2.first_name} {player2.last_name}</h2>
        {/* Include stats for the second player */}
      </div>
    </div>
  );
}

export default PlayerComparator;
