import { priceFormatter } from '../utils/priceFormatter'

export function Burger({ photoName, name, ingredients, soldOut, price }) {
  const burgerStyle = soldOut ? 'burger sold-out' : 'burger'

  return (
    <div className={burgerStyle}>
      <img src={photoName} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut === true ? 'CABO' : priceFormatter.format(price)}</span>
      </div>
    </div>
  )
}
