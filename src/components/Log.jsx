export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, i) => (
        <li className={i === 0 && "highlighted"} key={i}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
