import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cart-Slice/CartSlice";
import SearchSlice from "./Search-Slice/SearchSlice";
import FavSlice from "./Fav-Slice/FavSlice";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    fav: FavSlice,
    search: SearchSlice,
  },
});
