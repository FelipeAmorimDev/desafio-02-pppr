export function App() {
  function handleClickBtn({ target }) {
    console.log(target.textContent)
  }

  return (
    <div>
      <div className="container-close">
        <button className="close" onClick={handleClickBtn}>
          Fechar
        </button>
      </div>
      <div className="steps">
        <div>
          <div className="numbers">
            <div className="active">1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <h1 className="message">Passo 1: Entender o problema do cliente</h1>
          <div className="buttons">
            <button onClick={handleClickBtn}>Anterior</button>
            <button onClick={handleClickBtn}>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  )
}
