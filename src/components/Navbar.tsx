import { NavLink } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          ShopEase
        </NavLink>
        <div className="navbar-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar-link${isActive ? " navbar-link-active" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `navbar-link${isActive ? " navbar-link-active" : ""}`
            }
          >
            Cart
            {totalItems > 0 && (
              <span className="navbar-cart-badge">{totalItems}</span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
