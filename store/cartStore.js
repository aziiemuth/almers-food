import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],

  addItem: (product, selectedVariant = null) => {
    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) => item.productId === product.id && item.selectedVariant === selectedVariant
      );
      if (existingIndex > -1) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          qty: newItems[existingIndex].qty + 1,
        };
        return { items: newItems };
      }
      return {
        items: [
          ...state.items,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            selectedVariant,
            qty: 1,
          },
        ],
      };
    });
  },

  incrementItem: (productId, selectedVariant = null) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.productId === productId && item.selectedVariant === selectedVariant
          ? { ...item, qty: item.qty + 1 }
          : item
      ),
    }));
  },

  decrementItem: (productId, selectedVariant = null) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item.productId === productId && item.selectedVariant === selectedVariant
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0),
    }));
  },

  deleteItem: (productId, selectedVariant = null) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.productId === productId && item.selectedVariant === selectedVariant)
      ),
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotal: () => {
    return get().items.reduce((sum, item) => sum + item.price * item.qty, 0);
  },
}));

export default useCartStore;
