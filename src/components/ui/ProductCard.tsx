import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <strong>{product.price} ISK</strong>
    </Link>
  );
}