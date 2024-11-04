import PropTypes from 'prop-types';

const Selected = ({ selectedPlayers, onDelete, onAddPlayer }) => {
  return (
    <div className="container mx-auto mt-12">
      <h3 className="text-xl font-bold mb-6">
        Selected Players ({selectedPlayers.length}/6)
      </h3>

      <div className="space-y-4">
        {selectedPlayers.map(player => (
          <div
            key={player.playerId}
            className="flex items-center justify-between px-7 p-4 pr-10 bg-gray-100 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-6">
              <img
                src={player.image}
                className="w-16 h-16 rounded-full bg-gray-300"
                alt=""
              />
              <div>
                <h2 className="text-xl font-bold">{player.name}</h2>
                <p className="text-gray-500 text-sm">{player.battingType}</p>
              </div>
            </div>
            <button onClick={() => onDelete(player.playerId)}>
              <i className="fa-solid fa-trash-xmark text-2xl font-bold text-red-500 hover:text-red-800"></i>
            </button>
          </div>
        ))}
      </div>
      <button onClick={onAddPlayer} className="bg-[#E7FE29] px-6 py-3 rounded-xl font-bold mt-8">
        Add More Player
      </button>
    </div>
  );
};

Selected.propTypes = {
  selectedPlayers: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAddPlayer: PropTypes.func.isRequired
}

export default Selected;

