import PropTypes from 'prop-types';
import './Button.css'

const Button = ({ handleIsActiveStatus, isActive, selectedPlayers }) => {
  return (
    <div>
      <div className="pt-3 pr-3 md:pr-5 xl:pr-0">
        <button
          onClick={() => handleIsActiveStatus('available')}
          className={`${isActive.available ? 'active' : 'btn'} 
          border rounded-l-lg px-4 py-2 font-bold text-black`}
        >
          Available
        </button>

        <button
          onClick={() => handleIsActiveStatus('selected')}
          className={`${!isActive.available ? 'active' : 'btn'} 
          border rounded-r-lg px-4 py-2 font-bold text-black`}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>
    </div>
  );
};

Button.propTypes = {
  handleIsActiveStatus: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
  selectedPlayers: PropTypes.object.isRequired
};

export default Button;
