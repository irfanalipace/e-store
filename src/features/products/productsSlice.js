import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },

    loadProducts: (state, action) => {
      state.products = action.payload;
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addProducts, loadProducts, removeProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
