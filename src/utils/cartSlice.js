import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("Item index:" + itemIndex);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.items.push(tempProduct);
      }
      state.cartTotalQuantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
        state.cartTotalQuantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.cartTotalQuantity -= action.payload.quantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.cartTotalQuantity = 0;
    },
    getTotalAmount: (state) => {
      console.log("calculating..");
      const total = state.items.reduce((totalVal, item) => {
        totalVal = totalVal + item.quantity * item.price;
        return totalVal;
      }, 0);
      state.cartTotalAmount = total;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  clearCart,
  getTotalAmount,
  decreaseQuantity,
} = cartSlice.actions;
