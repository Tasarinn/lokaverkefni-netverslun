import { Link } from 'react-router-dom';
import { useCartStore } from '../features/cart/cartStore';

export function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const totalPrice = useCartStore((state) =>
  state.getTotalPrice(),
);

  if (items.length === 0) {
    return (
      <>
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/products">Go to products</Link>
      </>
    );
  }

  return (
    <>
      <h1>Cart</h1>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price} ISK</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: {totalPrice} ISK</h2>

      <Link to="/checkout">Go to checkout</Link>
    </>
  );
}