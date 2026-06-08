import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { useCartStore } from '../features/cart/cartStore';
import { getProductById } from '../lib/products';

export function ProductPage() {
  const { id } = useParams();

  const addToCart = useCartStore((state) => state.addToCart);

  const productId = Number(id);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
  });

  if (isLoading) {
    return <p>Loading product...</p>;
  }

  if (error || !product) {
    return (
      <>
        <h1>Product not found</h1>
        <Link to="/products">Back to products</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/products">Back to products</Link>

      <h1>{product.name}</h1>

      <img src={product.image} alt={product.name} />

      <p>{product.category}</p>
      <p>{product.description}</p>
      <h2>{product.price} ISK</h2>

      <button onClick={() => addToCart(product)}>Add to cart</button>
    </>
  );
}