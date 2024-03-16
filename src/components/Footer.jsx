import { Checkout } from './Checkout'

export function Footer() {
  return (
    <footer className="footer">
      <div className="order">
        <Checkout />
      </div>
    </footer>
  )
}
