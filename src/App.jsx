import { Contador } from './Contador'

export function App() {
  const actualDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="container">
      <Contador type="Intervalo" value="1" />
      <Contador type="Contagem" value="0" />

      <h2 className="container">Hoje é {actualDate}</h2>
    </div>
  )
}
