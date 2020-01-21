import React from "react";

const Player = ({playerInfo, isPlayerSelected, onClick, searchPopularity}) =>  {
  
  const playerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid green",
    margin: "5px",
    width: "300px",
    height: "100px",
    cursor: "pointer",
    backgroundColor: isPlayerSelected() ? 
      (searchPopularity === "HIGH" ? "#86af49" : 
        searchPopularity === "MEDIUM" ? "#b5e7a0" :
         "#e3eaa7") : "white"
  };

  const handleClick = e => {
    onClick();
  }
  
  return (
    <div style={playerStyle} onClick={handleClick}>
      <div>{playerInfo.name}</div>
      <div>{playerInfo.country}</div>
    </div>
  );
}

export default Player;