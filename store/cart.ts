import { IProduct } from '@/models/product.model';
import { create } from 'zustand';

type CartItem = {
  product: IProduct;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
};
const LOCAL_STORAGE_KEY = 'cart';

// initial cart data from local storage
const initializeCartFromLocalStorage = (): CartItem[] => {
  const localStorageCart = localStorage.getItem(LOCAL_STORAGE_KEY);
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const useCartStore = create<CartStore>((set) => ({
  cart: initializeCartFromLocalStorage(),
  addToCart: (product) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex((item) => item.product.id === product.id);

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
      } else {
        state.cart.push({ product, quantity: 1 });
      }

      // Update local storage with the updated cart
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.cart));

      return { cart: [...state.cart] };
    });
  },
  removeFromCart: (productId) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.product.id !== productId);

      // Update local storage with the updated cart
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCart));

      return { cart: updatedCart };
    });
  },
  updateCartItemQuantity: (productId, quantity) => {
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });

      // Update local storage with the updated cart
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCart));

      return { cart: updatedCart };
    });
  },
}));
