import React from 'react'
import { Skills } from './Skills.jsx'

export function ListOfSkills() {
  const abilities = [
    { name: 'Programação', emoji: '🤘', color: 'bg-lightblue' },
    { name: 'Inglês', emoji: '👍', color: 'bg-yellow' },
    { name: 'Culinária', emoji: '👎', color: 'bg-pink' },
    { name: 'Piadas ruins', emoji: '🤘', color: 'bg-red' },
  ]

  return (
    <ul className="list-of-skills">
      {abilities.map((abilitie) => {
        return (
          <Skills
            key={abilitie.name}
            name={abilitie.name}
            emoji={abilitie.emoji}
            color={abilitie.color}
          />
        )
      })}
    </ul>
  )
}
