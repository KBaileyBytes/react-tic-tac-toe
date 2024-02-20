import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSquareClick, symbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleClick(row, col) {
    setGameBoard((oldGameBoard) => {
      const updatedBoard = [...oldGameBoard.map((row) => [...row])];
      updatedBoard[row][col] = symbol;
      return updatedBoard;
    });

    onSquareClick();
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
