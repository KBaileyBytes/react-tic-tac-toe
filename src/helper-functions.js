const WINNING_DIAGONAL_COMBINATIONS = [
  [
    {
      row: 0,
      col: 0,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 2,
      col: 2,
    },
  ],
  [
    {
      row: 0,
      col: 2,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 2,
      col: 0,
    },
  ],
];

export const getActivePlayer = (gameTurns) =>
  gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";

export const getGameState = (gameTurns, currentPlayer) => {
  const playerTurns = gameTurns
    .filter((turn) => turn.player === currentPlayer)
    .map((turn) => turn.square);

  // Winning condition: check diagonal or 3 matching digits in the array

  const { row, col } = getPropertyCount(playerTurns);

  if (Object.values(row).includes(3) || Object.values(col).includes(3)) {
    return currentPlayer;
  }

  let winner = null;

  WINNING_DIAGONAL_COMBINATIONS.forEach((diagonalCombination) => {
    const hasDiagonalWin = diagonalCombination.every((combination) => {
      return playerTurns.some(
        (turn) => turn.row === combination.row && turn.col === combination.col
      );
    });

    if (hasDiagonalWin) {
      winner = currentPlayer;
      return;
    }
  });

  return winner;
};

// Returns the number of times a given property appears in an object
const getPropertyCount = (playerTurns) => {
  return playerTurns.reduce(
    (accumulator, currentValue) => {
      const { row, col } = currentValue;

      // Increment count for the current row value
      accumulator.row[row] = (accumulator.row[row] || 0) + 1;
      accumulator.col[col] = (accumulator.col[col] || 0) + 1;

      return accumulator;
    },
    { row: {}, col: {} }
  );
};
