import { describe, expect, it } from 'vitest';

function fakePayment(totalPrice: number, isLoggedIn: boolean) {
  if (!isLoggedIn) {
    return {
      success: false,
      message: 'User must be logged in',
    };
  }

  if (totalPrice <= 0) {
    return {
      success: false,
      message: 'Cart is empty',
    };
  }

  return {
    success: true,
    message: 'Payment successful',
  };
}

describe('fake checkout logic', () => {
  it('blocks checkout when user is not logged in', () => {
    const result = fakePayment(4990, false);

    expect(result.success).toBe(false);
    expect(result.message).toBe('User must be logged in');
  });

  it('blocks checkout when cart is empty', () => {
    const result = fakePayment(0, true);

    expect(result.success).toBe(false);
    expect(result.message).toBe('Cart is empty');
  });

  it('allows fake payment when logged in and total is above zero', () => {
    const result = fakePayment(4990, true);

    expect(result.success).toBe(true);
    expect(result.message).toBe('Payment successful');
  });
});