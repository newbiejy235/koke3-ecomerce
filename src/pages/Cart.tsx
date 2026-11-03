import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import CartItem from "@/components/CartItem"
import { formatPrice } from "@/utils/format"

const Cart = () => {
  const { cart, clearCart } = useCart()

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="empty-state">
          <h1>Keranjang Kosong</h1>
          <p>Keranjang kamu masih kosong. Yuk mulai belanja!</p>
          <Link to="/" className="btn btn-primary">
            Lanjut Belanja
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>Keranjang Belanja</h1>
        <p>Daftar produk yang sudah kamu tambahkan.</p>
      </header>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <aside className="cart-summary">
          <h2>Ringkasan Belanja</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="summary-row summary-row-total">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="summary-row">
            <span>Total Item</span>
            <span>{totalItems}</span>
          </div>
          <div
            className="cart-summary-actions"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link to="/" className="btn btn-primary btn-block">
              Lanjut Belanja
            </Link>

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={clearCart}
            >
              Bayar
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Cart
