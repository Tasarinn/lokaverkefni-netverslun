import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../lib/products';

export function ProductsPage() {
  return (
    <>
      <h1>Products</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
}