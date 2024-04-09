import data from "../../../../data/db.json";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Store/Cart-Slice/CartSlice";
import { Button } from "@material-tailwind/react";
import { setSearch } from "../../../Store/Search-Slice/SearchSlice";
import { Link } from "react-router-dom";
import { addToFav, deleteFromFav } from "../../../Store/Fav-Slice/FavSlice";

function SideProducts() {
  const fav = useSelector((state) => state.fav.fav);

  const dispatch = useDispatch();
  // select search in initailState
  const search = useSelector((state) => state.search.search);
  return (
    <>
      <div>
        <div className="flex items-center w-3/4 sm:w-1/2 mx-auto border-2 py-2 px-3 rounded-2xl mb-4 shadow-sm">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="w-full  pl-2 outline-none border-none"
            placeholder="Search here"
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {data.collection.products
            .filter((item) => {
              // search
              return item.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full mx-auto lg:w-1/4 md:w-1/3 sm:w-1/2 lg:mb-0 mb-6 p-2"
                >
                  <div className="ml-5 md:ml-auto md:w-full md:h-full border-4 shadow-md text-center py-3">
                    <Link to={`/productDetails/${item.id}`}>
                      <img
                        alt="testimonial"
                        className=" mx-auto object-cover object-center rounded-full inline-block  bg-opacity-10"
                        src={item.image}
                      />
                    </Link>
                    <p className="text-2xl md:text-2xl text-cyan-800">
                      {item.title}{" "}
                    </p>
                    <span className="inline-block h-1 w-14 rounded bg-cyan-500/35 my-3"></span>
                    <p className="uppercase mb-3 text-gray-600 text-base md:text-lg px-10">
                      {item.category}
                    </p>
                    <div className="flex justify-center items-center mb-2 gap-5">
                      <p className="text-lg md:text-xl text-gray-800 ">
                        {item.price} $
                      </p>
                      <i
                        style={
                          fav.some((ele) => ele.id === item.id)
                            ? { color: "red" }
                            : { color: "unset" }
                        }
                        onClick={() => {
                          !fav.find((ele) => ele.id === item.id)
                            ? dispatch(addToFav(item))
                            : dispatch(deleteFromFav(item));
                        }}
                        className="fa-solid fa-heart text-xl cursor-pointer"
                      ></i>
                    </div>
                    <Button
                      className="bg-cyan-700 w-1/2 mx-auto"
                      onClick={() => {
                        dispatch(addToCart(item));
                      }}
                    >
                      <ShoppingBagIcon className="h-6 mx-auto text-gray-200" />
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default SideProducts;
