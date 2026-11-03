import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/format";
import type { CartItem as CartItemType } from "@/types";

type CartItemProps = {
  item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">{formatPrice(item.price)}</p>
        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
            <span className="quantity-value">{item.quantity}</span>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => removeFromCart(item.id)}
          >
            Hapus
          </button>
        </div>
      </div>
      <div className="cart-item-subtotal">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
    </div>
  );
};

export default CartItem;
