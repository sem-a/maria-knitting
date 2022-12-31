import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/product/categorySlice";
import productsSlice from "./features/product/productsSlice";
import userSlice  from "./features/user/userSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
    categories: categorySlice,
    user: userSlice,
  },
});