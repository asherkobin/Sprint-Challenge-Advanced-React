import React from 'react';
import './App.css';
import Players from "./Modules/Players";

function App() {
  return (
    <>
      <div style={{ fontSize: "30px", textAlign: "center" }}>Select Your Favorite Players</div>
      <Players />
      <div data-testid="Players"></div>
    </>
  );
}

export default App;
