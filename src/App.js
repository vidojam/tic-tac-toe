import React, { useState, useEffect } from 'react';
import Cell from './components/Cell.js'; // Adjust the import path based on your file structure

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = `It is now ${go}'s turn`;

  
  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winningCombos.forEach(array => {
      const [a, b, c] = array;
      if (cells[a] === "circle" && cells[b] === "circle" && cells[c] === "circle") {
        setWinningMessage("Circle Wins!");
      } else if (cells[a] === "cross" && cells[b] === "cross" && cells[c] === "cross") {
        setWinningMessage("Cross Wins!");
      }
    });
  };

  // Call checkScore whenever cells or go changes
  useEffect(() => {
    checkScore();
  }, [cells, go]);

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
};

export default App;


