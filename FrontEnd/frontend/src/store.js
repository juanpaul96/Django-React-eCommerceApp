import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

export default configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,

    cart: cartSlice,
  },
});
