import React from "react";
import { useSelectedPlayers } from "../Hooks/useSelectedPlayers";

const Player = ({playerInfo}) =>  {
  const [selectedPlayers, setSelectedPlayers] = useSelectedPlayers([]);
  const playerId = "player_" + playerInfo.id;
  const playerStyle = {
    border: "1px solid green",
    padding: "5px",
    margin: "5px",
    width: "200px",
    textAlign: "center",
    cursor: "pointer"
  };

  function getPlayerStyle() {
    if (selectedPlayers.includes(playerId)) {
      playerStyle.backgroundColor = "green";
    }

    return playerStyle;
  }

  const handleClick = e => {

    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers([]);
      document.getElementById(playerId).style.backgroundColor = "white";
      console.log(document.getElementById(playerId))
    }
    else {

      setSelectedPlayers([playerId]);
      document.getElementById(playerId).style.backgroundColor = "green";
      console.log(document.getElementById(playerId))
    }
  }
  
  return (
    <div style={getPlayerStyle()} onClick={handleClick} id={playerId}>
      <div>{playerInfo.name}</div>
      <div>{playerInfo.country}</div>
    </div>
  );
}

export default Player;