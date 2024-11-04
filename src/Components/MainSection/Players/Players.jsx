// import React from 'react';

import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import PropTypes from 'prop-types';


const Players = ({ selectPlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('Data.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div>
      {/* <div className="container mx-auto mt-10">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl">Available Players</h1>
        </div>
      </div> */}
      <div className="grid grid-cols-3 gap-7 container mx-auto mt-6">
        {players.map(player => (
          <Player
            key={player.playerId}
            player={player}
            selectPlayer={selectPlayer}
          ></Player>
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {
  selectPlayer: PropTypes.func.isRequired,
}

export default Players;
