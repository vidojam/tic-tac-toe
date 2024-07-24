import { useState } from 'react'

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map(cell => <Cell/>}
      </div>

    </div>
  );
}

export default App;
