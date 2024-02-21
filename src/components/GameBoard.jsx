const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSquareClick, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((playerSymbol, j) => (
              <li key={j}>
                <button
                  onClick={() => onSquareClick(i, j)}
                  disabled={gameBoard[i][j] !== null}
                  style={{ cursor: gameBoard[i][j] === null && "pointer" }}
                >
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
