import { Link } from 'react-router-dom';

export function ConfirmationPage() {
  return (
    <>
      <h1>Order confirmed</h1>
      <p>Your fake payment was successful.</p>
      <Link to="/products">Continue shopping</Link>
    </>
  );
}