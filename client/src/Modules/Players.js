import React from "react";
import Player from "./Player";
import Axios from "axios";

export default class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: null
    };

    this.playersStyle = {
      display: "flex",
      flexWrap: "wrap"
    };
  }

  componentDidMount() {
    Axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ playerData: res.data });
      })
      .catch(err => {
        console.log("Axios Error:", err)
      });
    };


  render() {
    return (
      !this.state.playerData ? <div>Loading...</div> :
      <div style={ this.playersStyle }>
        {
          this.state.playerData.map(playerInfo => {
            return <Player playerInfo={playerInfo} key={ playerInfo.name + playerInfo.country }/>
          })
        }
      </div>
    )
  }
}