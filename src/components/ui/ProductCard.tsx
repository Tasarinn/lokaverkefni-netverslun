import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <div>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price} ISK</p>
      </div>
    </Link>
  );
}