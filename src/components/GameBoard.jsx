import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleClick(row, col) {
    setGameBoard((oldGameboard) => {
      const updatedBoard = [...oldGameboard.map((row) => [...row])];
      updatedBoard[row][col] = "X";
      return updatedBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((playerSymbol, j) => (
              <li key={j}>
                <button onClick={() => handleClick(i, j)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
