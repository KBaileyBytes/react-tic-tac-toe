import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { getActivePlayer, getGameState } from "./helper-functions";

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  const [winner, setWinner] = useState("");
  const hasDraw = gameTurns.length === 9 && !winner;
  const currentPlayer = getActivePlayer(gameTurns);

  function handleSquareClick(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
          name: players[currentPlayer],
        },
        ...prevTurns,
      ];

      setWinner(() => getGameState(updatedTurns, currentPlayer));

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
    setWinner("");
  }

  function handlePlayerNameChange(symbol, name) {
    setPlayers((prevPlayers) => ({ ...prevPlayers, [symbol]: name }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={players[winner]} onRestart={handleRestart} />
        )}
        <GameBoard onSquareClick={handleSquareClick} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
