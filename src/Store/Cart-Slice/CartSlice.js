import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const CartSlice = createSlice({
  initialState: {
    cart: localStorage.getItem("medzCart")
      ? JSON.parse(localStorage.getItem("medzCart"))
      : [],
  },
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      // get item from id when click on
      const findProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      // to add quantity to product and save product
      if (findProduct) {
        // لما تضغط على المنتج كذا مره او طلبته اكتر من مره
        findProduct.quantity += 1;
      } else {
        // جبت نسخه من المنتج وضفت عليه خاصية الكميه لانها غير موجوده من الاول
        const productClone = { ...action.payload, quantity: 1 };
        state.cart.push(productClone);
      }
      toast.success(`Added ${action.payload.title.slice(0, 10)} to Cart `);

      localStorage.setItem("medzCart", JSON.stringify(state.cart));
    },
    // delete one product
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      toast.error(`Removed ${action.payload.title.slice(0, 10)} !!`);

      localStorage.setItem("medzCart", JSON.stringify(state.cart));
    },
    // remove All products from cart
    clear: (state) => {
      state.cart = [];

      localStorage.setItem("medzCart", JSON.stringify(state.cart));
    },
    // Increment product + 1
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      toast(`add one again !`, {
        icon: "👏",
      });

      localStorage.setItem("medzCart", JSON.stringify(state.cart));
    },
    // Decrement product - 1
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      toast.error(`Removed one !!`);

      localStorage.setItem("medzCart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, deleteFromCart, clear, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;
