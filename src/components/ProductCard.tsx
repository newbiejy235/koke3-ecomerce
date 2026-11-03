import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/format";
import type { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const productPath = `/product/${product.id}`;

  return (
    <article className="product-card">
      <Link to={productPath} className="product-card-image-link">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
      </Link>
      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>
        <h3 className="product-card-name">
          <Link to={productPath}>{product.name}</Link>
        </h3>
        <p className="product-card-price">{formatPrice(product.price)}</p>
        <div className="product-card-actions">
          <Link to={productPath} className="btn btn-outline">
            Detail
          </Link>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
