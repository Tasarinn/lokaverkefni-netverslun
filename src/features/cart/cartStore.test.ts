import { beforeEach, describe, expect, it } from 'vitest';
import type { Product } from '../../types/product';
import { useCartStore } from './cartStore';

const product: Product = {
  id: 1,
  name: 'Whey Protein',
  price: 4990,
  image: 'https://placehold.co/300x300',
  category: 'Protein',
  description: 'High quality whey protein.',
};

describe('cartStore', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  it('adds product to cart', () => {
    useCartStore.getState().addToCart(product);

    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0].quantity).toBe(1);
  });

  it('increases quantity when same product is added twice', () => {
    useCartStore.getState().addToCart(product);
    useCartStore.getState().addToCart(product);

    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0].quantity).toBe(2);
  });

  it('calculates total price', () => {
    useCartStore.getState().addToCart(product);
    useCartStore.getState().addToCart(product);

    expect(useCartStore.getState().getTotalPrice()).toBe(9980);
  });
});