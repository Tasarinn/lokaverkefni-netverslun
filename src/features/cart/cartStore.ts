import { create } from 'zustand';
import type { Product } from '../../types/product';

type CartItem = Product & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (product) => {
    const existingItem = get().items.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        items: get().items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
      return;
    }

    set({
      items: [...get().items, { ...product, quantity: 1 }],
    });
  },

  removeFromCart: (productId) => {
    set({
      items: get().items.filter((item) => item.id !== productId),
    });
  },

  increaseQuantity: (productId) => {
    set({
      items: get().items.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    });
  },

  decreaseQuantity: (productId) => {
    set({
      items: get()
        .items.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    });
  },

  clearCart: () => {
    set({ items: [] });
  },

  get totalItems() {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  get totalPrice() {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },
}));