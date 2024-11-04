import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Players from './Components/MainSection/Players/Players';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Selected from './Components/MainSection/Selected/Selected';
import Button from './Components/Button/Button';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';

function App() {

  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]); 
  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  });

  const addCoins = () => {
    setCoins(prevCoins => prevCoins + 5000000);
    toast.success('Credit Claimed Successfully!');
  };

  const handleIsActiveStatus = (status) => {
    setIsActive({
      available: status === 'available',
      status
    });
  };


  const selectPlayer = player => {
    if (selectedPlayers.length >= 6) {
      toast.warning('You can only select up to 6 players!');
      return;
    }
    if (selectedPlayers.find(p => p.playerId === player.playerId)) {
      toast.error('This Player Already Selected!');
      return;
    }
    if (coins < parseInt(player.biddingPrice.replace(/\$|,/g, ''))) {
      toast.error('Not Enough Coins! Please Claim Free Credit at First !!');
      return;
    }
    setCoins(coins - parseInt(player.biddingPrice.replace(/\$|,/g, '')));
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(`${player.name} Successfully Added to your Squad!`);
  };


  const handleDeletePlayer = (playerId) => {
    const updatePlayers = selectedPlayers.filter(player => player.playerId !== playerId);
    setSelectedPlayers(updatePlayers); 
    toast.warning('Player Remove to your Squad!');
  };

  const handleAddMorePlayer = () => {
    handleIsActiveStatus('available')
  };


  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Header addCoins={addCoins}></Header>

      <div className="display container mx-auto">
        {isActive.status === 'available' && (
          <AvailablePlayers></AvailablePlayers>
        )}

        <div className="button-container">
          <Button
            isActive={isActive}
            handleIsActiveStatus={handleIsActiveStatus}
            selectedPlayers={selectedPlayers}
          ></Button>
        </div>
      </div>

      {isActive.status === 'available' && (
        <Players selectPlayer={selectPlayer}></Players>
      )}
      {isActive.status === 'selected' && (
        <Selected
          selectedPlayers={selectedPlayers}
          onDelete={handleDeletePlayer}
          onAddPlayer={handleAddMorePlayer}
        ></Selected>
      )}
      
      <Footer></Footer>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
