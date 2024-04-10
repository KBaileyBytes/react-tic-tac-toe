export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, i) => (
        <li className={i === 0 ? "highlighted" : undefined} key={i}>
          {turn.name} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
