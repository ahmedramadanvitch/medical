import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const FavSlice = createSlice({
  initialState: {
    fav: localStorage.getItem("medzfav")
      ? JSON.parse(localStorage.getItem("medzfav"))
      : [],
  },
  name: "favSlice",
  reducers: {
    addToFav: (state, action) => {
      // get item from id when click on
      const findProduct = state.fav.find(
        (product) => product.id === action.payload.id
      );
      // to add quantity to product and save product
      if (findProduct) {
        // لما تضغط على المنتج كذا مره او طلبته اكتر من مره
        findProduct.quantity += 1;
      } else {
        // جبت نسخه من المنتج وضفت عليه خاصية الكميه لانها غير موجوده من الاول
        const productClone = { ...action.payload, quantity: 1 };
        state.fav.push(productClone);
      }
      toast.success(`Added ${action.payload.title.slice(0, 10)} to fav `);

      localStorage.setItem("medzfav", JSON.stringify(state.fav));
    },
    // delete one product
    deleteFromFav: (state, action) => {
      state.fav = state.fav.filter(
        (product) => product.id !== action.payload.id
      );
      toast.error(`Removed ${action.payload.title.slice(0, 10)} from fav !!`);

      localStorage.setItem("medzfav", JSON.stringify(state.fav));
    },
    // remove All products from fav
    clearFav: (state) => {
      state.fav = [];

      localStorage.setItem("medzfav", JSON.stringify(state.fav));
    },
  },
});

export const { addToFav, deleteFromFav, clearFav } = FavSlice.actions;
export default FavSlice.reducer;
