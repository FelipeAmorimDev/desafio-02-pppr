export function Checkout() {
  const actualHour = new Date().getHours()
  const isOpened = actualHour > 12 && actualHour < 22

  if (isOpened) {
    return (
      <>
        <p>
          🕛 Tamo aberto até as 22h. Vem visitar a gente ou faça seu pedid
          online.
        </p>
        <button
          className="btn"
          onClick={() => console.log('Direcionando para fazer pedido....')}
        >
          Fazer pedido.
        </button>
      </>
    )
  }

  return <p>🕛 Vamo abrir amanhã as 12h</p>
}
