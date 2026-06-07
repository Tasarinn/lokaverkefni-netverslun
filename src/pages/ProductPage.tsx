import { Link, useParams } from 'react-router-dom';
import { products } from '../lib/products';
import { useCartStore } from '../features/cart/cartStore';

export function ProductPage() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));
  const addToCart = useCartStore((state) => state.addToCart);
  if (!product) {
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