import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Dashboard = () => {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Explore Products</h1>
        <p>Temukan produk favoritmu dan tambahkan ke keranjang belanja.</p>
      </header>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
