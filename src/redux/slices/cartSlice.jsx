import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++; // Increment the total quantity

      if (!existingItem) {
        // If the item doesn't exist in the cart, add it with quantity 1
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price, // Initially, totalPrice equals price for one item
        });
      } else {
        // If the item already exists, increment its quantity and totalPrice
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price; // Increase totalPrice for the item
      }

      // Recalculate the total amount (total price for all items in the cart)
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.totalPrice, // Sum up all items' totalPrice
        0
      );
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // Decrease total quantity before r[emoving item from the cart
        state.totalQuantity -= existingItem.quantity;

        // Remove item from the cart
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }

      // Recalculate the total amount after deletion
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.totalPrice, // Sum up all remaining items' totalPrice
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
