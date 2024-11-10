import PropTypes from 'prop-types';

const Player = ({ player, selectPlayer }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;
  return (
    <div className="">
      <div className="border-2 border-gray-300 rounded-lg">
        <div className="p-5">
          <img className="w-full h-44 rounded-lg" src={image} alt="" />
          <div className="flex items-center space-x-3 pt-3">
            <i className="text-xl fa-duotone fa-solid fa-user"></i>
            <h1 className="font-bold text-lg">{name}</h1>
          </div>
          <div className="flex items-center justify-between border-b-2 pb-4 pt-1">
            <div className="flex items-center space-x-2 text-gray-500 ">
              <i className="fa-solid fa-flag"></i>
              <p>{country}</p>
            </div>
            <button className="bg-gray-200 rounded-lg px-2 py-1">{role}</button>
          </div>
          <h3 className="font-bold pt-3">Rating</h3>
          <div className="flex items-center justify-between pt-2">
            <p className="font-semibold">{battingType}</p>
            <p className="text-gray-500">{bowlingType}</p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <p className="font-semibold">Price: {biddingPrice}</p>
            <button
              onClick={() => selectPlayer(player)}
              className="border px-3 py-1 rounded-lg hover:bg-yellow-300"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



Player.propTypes = {
  player: PropTypes.object.isRequired,
  selectPlayer: PropTypes.object.isRequired,
};

export default Player;
