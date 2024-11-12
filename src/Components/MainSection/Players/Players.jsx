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
      <div className="grid px-5 mx-auto md:grid-cols-2  xl:grid-cols-3 xl:px-0 xl:mx-auto gap-7 container mt-6">
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
