export function Skills({ name, emoji, color }) {
  return (
    <li className={`skill ${color}`}>
      {name} {emoji}
    </li>
  )
}
