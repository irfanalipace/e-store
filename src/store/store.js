

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import todoReducer from "../features/products/todoSlice";
import authReducer from "../features/auth/authSlice"
const store = configureStore({
  reducer: {
    products: productsReducer,
    todos: todoReducer,
    auth:authReducer
  },
});

export default store;
