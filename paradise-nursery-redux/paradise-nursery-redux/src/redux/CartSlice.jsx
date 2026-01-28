import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of cart items
  totalQuantity: 0, // Total number of items in cart
  totalAmount: 0, // Total cost of all items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // If item already exists, increment quantity
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // Add new item to cart
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          category: newItem.category,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      // Update totals
      state.totalQuantity++;
      state.totalAmount += newItem.price;
    },

    // Remove item from cart completely
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        // Update totals before removing
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;

        // Remove item from cart
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    // Increase item quantity
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;

        // Update totals
        state.totalQuantity++;
        state.totalAmount += existingItem.price;
      }
    },

    // Decrease item quantity
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;

        // Update totals
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        // If quantity is 1, remove the item
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalAmount = (state) => state.cart.totalAmount;

// Export reducer
export default cartSlice.reducer;
