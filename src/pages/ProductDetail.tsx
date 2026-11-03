import { Link, useParams } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/format";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === Number(id));

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="page">
        <div className="empty-state">
          <h1>Produk tidak ditemukan</h1>
          <p>Maaf, produk yang kamu cari tidak tersedia.</p>
          <Link to="/" className="btn btn-primary">
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/" className="btn btn-outline">
        Kembali ke Dashboard
      </Link>
      <div className="product-detail">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <span className="product-card-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-detail-price">{formatPrice(product.price)}</p>
          <p className="product-detail-description">{product.description}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
