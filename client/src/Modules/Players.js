import React from "react";
import Player from "./Player";
import { useRemoteData } from "../Hooks/useRemoteData";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const Players = () => {
  const playerData = useRemoteData("http://localhost:5000/api/players");
  const [selectedPlayers, setSelectedPlayers] = useLocalStorage("SELECTED_PLAYERS", []);
  const playersStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  function toggleSelectedPlayer(playerId) {
    const filteredSelectedPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer !== playerId);

    if (selectedPlayers.length === filteredSelectedPlayers.length) {
      setSelectedPlayers([...filteredSelectedPlayers, playerId]);
    }
    else {
      setSelectedPlayers(filteredSelectedPlayers);
    }
  }

  function isPlayerSlected(playerId) {
    return selectedPlayers.includes(playerId);
  }
  
  return (
    !playerData ? <div>Loading...</div> :
    <div style={ playersStyle }>
      { 
        playerData.map(playerInfo => {
          const playerId = "player_" + playerInfo.id;
          return <Player 
            playerInfo={playerInfo} key={playerId}
            isPlayerSelected={() => isPlayerSlected(playerId)}
            onClick={() => toggleSelectedPlayer(playerId)}
            searchPopularity={ playerInfo.searches > 50 ? "HIGH" : playerInfo.searches >= 5 ? "MEDIUM" : "LOW"} />
        })
      }
    </div>
  )
}

export default Players;
