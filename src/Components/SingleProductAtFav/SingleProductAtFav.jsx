import { Button, IconButton } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromFav } from "../../Store/Fav-Slice/FavSlice";
import { ShoppingBagIcon, TrashIcon } from "@heroicons/react/24/solid";
import { addToCart } from "../../Store/Cart-Slice/CartSlice";

export default function SingleProductAtFav() {
  const fav = useSelector((state) => state.fav.fav);

  const dispatch = useDispatch();
  // Empty Cart Message if cart is empty
  const EmptyFavMsg = (
    <h4 className="text-deep-orange-900 font-semibold text-3xl text-center">
      No Items Found
    </h4>
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 px-4 py-3 w-full  md:w-3/4   mx-auto">
        {fav.length < 1
          ? EmptyFavMsg
          : fav.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col md:flex-row items-center justify-between bg-white shadow-xl rounded-xl p-3"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <div className="flex flex-col w-[150px] h-[150px]  md:w-[100px] md:h-[100px] items-center">
                      <img src={item.image} className="w-full h-full" alt="" />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                      <p className=" text-xl font-semibold text-[#103956]">
                        {item.title.slice(0, 10).toLowerCase()}
                      </p>

                      <p className="text-cyan-900 font-semibold my-1">
                        <span className="text-gray-700">Price : </span>
                        {item.price} $
                      </p>
                      <Button
                        className="bg-cyan-700 mx-auto p-2 w-[100px]"
                        onClick={() => {
                          dispatch(addToCart(item));
                          dispatch(deleteFromFav(item));
                        }}
                      >
                        <ShoppingBagIcon className="h-5 mx-auto text-gray-200" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end justify-center gap-2">
                    {/* remove icon */}
                    <IconButton
                      className=""
                      onClick={() => dispatch(deleteFromFav(item))}
                      variant="text"
                    >
                      <TrashIcon className="h-6 w-6 text-red-600" />
                    </IconButton>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}
