import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthProvider';
import { useCartStore } from '../features/cart/cartStore';

export function CheckoutPage() {
  const navigate = useNavigate();

  const { session, loading } = useAuth();

  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const clearCart = useCartStore((state) => state.clearCart);

  function handleFakePayment() {
    clearCart();
    navigate('/confirmation');
  }

  if (loading) {
    return (
      <>
        <h1>Checkout</h1>
        <p>Checking login status...</p>
      </>
    );
  }

  if (!session) {
    return (
      <>
        <h1>Checkout</h1>
        <p>You must be logged in to checkout.</p>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
      </>
    );
  }

  return (
    <>
      <h1>Checkout</h1>

      <p>Total: {totalPrice} ISK</p>
      <p>This is a fake payment. No real card details are collected.</p>

      <button onClick={handleFakePayment}>Complete fake payment</button>
    </>
  );
}