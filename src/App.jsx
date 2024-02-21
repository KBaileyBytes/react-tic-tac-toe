import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

// Doesn't need to render inside App
const deriveActivePlayer = (gameTurns) =>
  gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let currentPlayer = deriveActivePlayer(gameTurns);

  function handleSquareClick(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GameBoard onSquareClick={handleSquareClick} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
