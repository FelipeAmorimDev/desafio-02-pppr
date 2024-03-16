export function App() {
  const cardsInfo = [
    {
      id: 7336,
      question: 'Do quê aplicações React são feitas?',
      answer: 'Componentes',
    },
    {
      id: 8832,
      question: 'Qual é o nome da sintaxe usada para descrever UI no React?',
      answer: 'JSX',
    },
    {
      id: 3457,
      question: 'Em qual linguagem o React é baseado?',
      answer: 'JavaScript',
    },
    {
      id: 9103,
      question: 'Qual método usar para renderizar uma lista no React?',
      answer: 'map',
    },
    {
      id: 1297,
      question: 'Qual empresa criou o React?',
      answer: 'Meta',
    },
    {
      id: 2002,
      question: 'Como passar informações para um componente React?',
      answer: 'Através de props',
    },
  ]

  function handleCardClick(e) {
    console.log(e.target.getAttribute('data-id'))
  }

  return (
    <div className="flashcards">
      {cardsInfo.map((card) => {
        return (
          <div
            key={card.id}
            className="card"
            data-id={card.id}
            onClick={handleCardClick}
          >
            {card.question}
          </div>
        )
      })}
    </div>
  )
}
