import React, { useState } from 'react';
import Cell from './components/cells'; // Adjust the import path based on your file structure

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = "it is now " + go + "'s go";

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell 
          key={index} 
          id={index} 
          cell={cell} 
          go={go} // Assuming Cell component accepts `cell` prop
          setGo={setGo}
          cells = {cells}
          setCells = {setCells}/>
        ))}
      </div>
      <p>{ winningMessage || message } </p>
    </div>
  );
}


export default App;
